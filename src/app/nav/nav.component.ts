import { Component, OnInit } from '@angular/core';
import {MessageHistory} from '../common/message-history';
import {MessageService} from '../common/message.service';
import {faFile} from '@fortawesome/free-solid-svg-icons';
import {faTable} from '@fortawesome/free-solid-svg-icons';
import {faFlag} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faEraser} from '@fortawesome/free-solid-svg-icons';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})

export class NavComponent implements OnInit {
  cardIcon = faFile;
  tableIcon = faTable;
  flagIcon = faFlag;
  userIcon = faUser;
  eraseIcon = faEraser;
  logoutIcon = faSignOutAlt;
  username = '';
  messageHistory: MessageHistory[];

  constructor(public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageHistory = this.messageService.getHistory();
  }
}
