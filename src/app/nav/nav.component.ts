import {Component, OnInit} from '@angular/core';
import {NavigationItemConfig, Notification} from 'patternfly-ng';
import {MessageService} from '../common/message.service';
import {MessageHistory} from '../common/message-history';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  notifications: Notification[];
  messageHistory: MessageHistory[];
  navigationItems: NavigationItemConfig[] = [
    {
      title: 'Card View',
      iconStyleClass: 'fa fa-file',
      url: '/home/card'
    },
    {
      title: 'Table View',
      iconStyleClass: 'fa fa-table',
      url: '/home/table'
    }
  ];

  constructor(public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.notifications = this.messageService.get();

    this.messageHistory = this.messageService.getHistory();
  }
}
