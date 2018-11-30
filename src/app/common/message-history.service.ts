import { Injectable } from '@angular/core';
import { MessageItem } from './message-item';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MessageHistoryService {
  messageHistory: MessageItem[];

  constructor(private messageService: MessageService) {
    this.messageHistory = new Array();
    messageService.messageAdded$.subscribe(msg => this.onMessageAdded(msg));
  }

  private onMessageAdded(msg: MessageItem): void {
    this.messageHistory.push(msg);
  }

  public clear(): void {
    this.messageHistory.length = 0;
  }

  getHistory(): MessageItem[] {
    return this.messageHistory;
  }
}
