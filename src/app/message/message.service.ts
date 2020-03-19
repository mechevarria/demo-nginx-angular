import { Injectable } from '@angular/core';
import { MessageItem } from './message-item';
import { Subject } from 'rxjs/internal/Subject';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public newMessage$: Subject<MessageItem> = new Subject();

  constructor(private toastr: ToastrService) {
  }

  success(msg: string): void {
    this.toastr.success(msg);
    this.emitMessage('cil-check-circle text-success', msg);
  }

  error(msg: string): void {
    this.toastr.error(msg);
    this.emitMessage('cil-x-circle text-danger', msg);
  }

  info(msg: string): void {
    this.toastr.info(msg);
    this.emitMessage('cil-info text-info', msg);
  }

  warning(msg: string): void {
    this.toastr.warning(msg);
    this.emitMessage('cil-warning text-warning', msg);
  }

  private emitMessage(classes: string, text: string): void {
    const message = new MessageItem(classes, text);

    // message history service will pick up the change
    this.newMessage$.next(message);
  }
}
