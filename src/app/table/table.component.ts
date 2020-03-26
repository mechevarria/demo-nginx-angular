import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { Comment } from './comment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  comments: Comment[] = new Array();
  count: number = 0;
  limit: number = 10;
  page: number = 1;
  loading: boolean = false;

  constructor(private commentService: CommentService) {
  }

  load(): void {
    this.loading = true;
    this.commentService.getComments(this.page, this.limit).subscribe(res => {
      this.loading = false;
      if (res !== null) {
        this.comments = res.body;
        this.count = parseInt(res.headers.get('x-total-count'));
      }
    });
  }

  pageChanged(event: any): void {
    this.page = event.page;
    this.load();
  }

  ngOnInit() {
    this.load();
  }
}
