import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Comment } from './comment';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../message/message.service';
import { Observable, of } from 'rxjs/index';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = '/jsonplaceholder/comments';

  constructor(private messageService: MessageService, private http: HttpClient) {
  }

  // X-Total-Count is returned in the header so full response is needed
  getComments(page: number, limit: number): Observable<HttpResponse<Comment[]>> {
    const options: any = {
      observe: 'response',
      params: new HttpParams()
        .append('_limit', limit.toString())
        .append('_start', ((page - 1) * limit).toString()),
    };

    return this.http.get<Comment[]>(this.url, options)
      .pipe(
        catchError(error => {
          this.messageService.error(`getComments() ${error.message}`);
          return of(null);
        })
      );
  }

}
