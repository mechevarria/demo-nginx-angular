import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../message/message.service';
import { CommentService } from './comment.service';
import { Comment } from './comment';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnDestroy, OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings;
  comments: Comment[];
  dtTrigger: Subject<any>;

  constructor(private messageService: MessageService, private commentService: CommentService) {
    this.dtOptions = {};
    this.comments = new Array();
    this.dtTrigger = new Subject();
  }

  load(): void {
    this.commentService.getComments().subscribe(res => {
      this.comments = res;
      this.rerender();

      if (this.comments != null) {
        this.messageService.success(`Successfully loaded ${this.comments.length} comments from service`);
      }
    });
  }

  rerender(): void {
    if (this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();

        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
    } else {
      this.dtTrigger.next();
    }
  }

  clear(): void {
    this.comments = [];
    this.rerender();
    this.messageService.info('Cleared data');
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'simple',
      responsive: true,
      pageLength: 10
    };
  }

  ngAfterViewInit() {
    this.rerender();
  }
}
