import { Injectable, EventEmitter } from '@angular/core';
import { MessageItem } from './message-item';
import { ToastrService } from 'ngx-toastr';
import {
  faCheckCircle,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private successIcon = faCheckCircle;
  private errorIcon = faTimesCircle;
  private infoIcon = faInfoCircle;
  private warningIcon = faExclamationCircle;
  public messageAdded$: EventEmitter<MessageItem>;

  constructor(private toastr: ToastrService) {
    this.messageAdded$ = new EventEmitter();
  }

  success(msg: string): void {
    this.toastr.success(msg);
    this.addToHistory(this.successIcon, msg);
  }

  error(msg: string): void {
    this.toastr.error(msg);
    this.addToHistory(this.errorIcon, msg);
  }

  info(msg: string): void {
    this.toastr.info(msg);
    this.addToHistory(this.infoIcon, msg);
  }

  warning(msg: string): void {
    this.toastr.warning(msg);
    this.addToHistory(this.warningIcon, msg);
  }

  private addToHistory(icon: IconDefinition, text: string): void {
    const message = new MessageItem();
    message.class = icon;
    message.text = text;

    // message history service will pick up this event
    this.messageAdded$.emit(message);
  }
}
