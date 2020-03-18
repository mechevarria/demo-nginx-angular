import { Injectable } from '@angular/core';
import { MessageItem } from './message-item';
import { Subject } from 'rxjs/internal/Subject';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public newMessage$: Subject<MessageItem> = new Subject();

  constructor(private notifierService: NotifierService) {
  }

  success(msg: string): void {
    this.notifierService.notify('success', msg);
    this.emitMessage('success', msg);
  }

  error(msg: string): void {
    this.notifierService.notify('error', msg);
    this.emitMessage('error', msg);
  }

  info(msg: string): void {
    this.notifierService.notify('info', msg);
    this.emitMessage('info', msg);
  }

  warning(msg: string): void {
    this.notifierService.notify('warning', msg);
    this.emitMessage('warning', msg);
  }

  private emitMessage(icon: string, text: string): void {
    const message = new MessageItem(icon, text);

    // message history service will pick up the change
    this.newMessage$.next(message);
  }
}
