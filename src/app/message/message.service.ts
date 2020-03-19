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
    this.emitMessage('success', msg);
  }

  error(msg: string): void {
    this.toastr.error(msg);
    this.emitMessage('error', msg);
  }

  info(msg: string): void {
    this.toastr.info(msg);
    this.emitMessage('info', msg);
  }

  warning(msg: string): void {
    this.toastr.warning(msg);
    this.emitMessage('warning', msg);
  }

  private emitMessage(icon: string, text: string): void {
    const message = new MessageItem(icon, text);

    // message history service will pick up the change
    this.newMessage$.next(message);
  }
}
