import { Component, OnInit } from '@angular/core';
import { MessageItem } from '../message/message-item';
import {
  faEraser,
  faChartPie,
  faFlag,
  faSignOutAlt,
  faTable,
  faUser,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faWpforms } from '@fortawesome/free-brands-svg-icons';
import { MessageHistoryService } from '../message/message-history.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  chartIcon: IconDefinition;
  tableIcon: IconDefinition;
  flagIcon: IconDefinition;
  userIcon: IconDefinition;
  eraseIcon: IconDefinition;
  logoutIcon: IconDefinition;
  githubIcon: IconDefinition;
  formIcon: IconDefinition;
  isCollapsed: boolean;
  username: string;
  messages: MessageItem[];

  constructor(private messageHistoryService: MessageHistoryService) {
    this.chartIcon = faChartPie;
    this.tableIcon = faTable;
    this.flagIcon = faFlag;
    this.userIcon = faUser;
    this.eraseIcon = faEraser;
    this.logoutIcon = faSignOutAlt;
    this.githubIcon = faGithub;
    this.formIcon = faWpforms;
    this.isCollapsed = true;
    this.messages = new Array();
    this.username = '';
  }

  clear() {
    this.messageHistoryService.clear();
  }

  ngOnInit(): void {
    this.messages = this.messageHistoryService.getHistory();
  }
}
