import {Injectable} from '@angular/core';
import {MessageHistory} from './message-history';
import {ToastrService} from 'ngx-toastr';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private successIcon = faCheckCircle;
  private errorIcon = faTimesCircle;
  private infoIcon = faInfoCircle;
  private warningIcon = faExclamationCircle;
  private messageHistory: MessageHistory[] = [];

  constructor(private toastr: ToastrService) {
  }

  getHistory(): MessageHistory[] {
    return this.messageHistory;
  }

  success(msg: string): void {
    this.toastr.success(msg);
    this.addToHistory(this.successIcon, msg);
  }

  error(msg: string): void {
    this.addToHistory(this.errorIcon, msg);
  }

  info(msg: string): void {
    this.addToHistory(this.infoIcon, msg);
  }

  warning(msg: string): void {
    this.addToHistory(this.warningIcon, msg);
  }

  private addToHistory(type: any, msg: string): void {
    // make the delay to dropdown the same as the notification fade
    setTimeout((history) => {
      history.push({
        class: type,
        msg: msg
      });
    }, 5000, this.messageHistory);
  }

  clear(): void {
    this.messageHistory.length = 0;
  }

}
