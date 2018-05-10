import {AfterViewInit, Component} from '@angular/core';
import {MessageService} from '../common/message.service';
import {CommentService} from './comment.service';
import {Comment} from './comment';
import {PaginationConfig, PaginationEvent, TableConfig} from 'patternfly-ng';

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

  paginationConfig: PaginationConfig = {
    pageSize: 5,
    pageNumber: 1,
    pageSizeIncrements: [5, 50, 500]
  };

  tableConfig: TableConfig = {
    showCheckbox: false,
    paginationConfig: this.paginationConfig
  };

  handlePage($event: PaginationEvent): void {
    this.updateRows();
  }

  updateRows(): void {
    this.rows = this.allRows.slice((this.paginationConfig.pageNumber - 1) * this.paginationConfig.pageSize,
      this.paginationConfig.totalItems).slice(0, this.paginationConfig.pageSize);
  }

  load(): void {
    this.commentService.getComments()
      .subscribe(res => {
        this.allRows = res;

        if (this.allRows != null) {
          this.messageService.success(`Successfully loaded ${this.allRows.length} comments from service`);
          this.paginationConfig.totalItems = this.allRows.length;
          this.updateRows();
        }

      });
  }

  clear(showMsg: boolean = true): void {
    this.allRows = [];
    this.updateRows();

    if (showMsg) {
      this.messageService.info('Cleared data');
    }
  }

  ngAfterViewInit() {
  }

}
