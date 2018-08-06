import {AfterViewInit, Component} from '@angular/core';
import {MessageService} from '../common/message.service';
import {CommentService} from './comment.service';
import {Comment} from './comment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements AfterViewInit {

  constructor(private messageService: MessageService, private commentService: CommentService) {
  }

  rows: Comment[] = [];
  allRows: Comment[] = [];

  columns: any[] = [
    {name: 'ID', prop: 'id', sortable: true},
    {name: 'Post ID', prop: 'postId', sortable: true},
    {name: 'Name', prop: 'name', sortable: false},
    {name: 'E-Mail', prop: 'email', sortable: false},
    {name: 'Body', prop: 'body', sortable: false}
  ];

  load(): void {
    this.commentService.getComments()
      .subscribe(res => {
        this.allRows = res;

        if (this.allRows != null) {
          this.messageService.success(`Successfully loaded ${this.allRows.length} comments from service`);
        }

      });
  }

  clear(showMsg: boolean = true): void {
    this.allRows = [];

    if (showMsg) {
      this.messageService.info('Cleared data');
    }
  }

  ngAfterViewInit() {
  }

}
