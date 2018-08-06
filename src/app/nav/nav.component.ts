import {Component, OnInit} from '@angular/core';
import {MessageHistory} from '../common/message-history';
import {MessageService} from '../common/message.service';
import {faEraser, faChartPie, faFlag, faSignOutAlt, faTable, faUser} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})

export class NavComponent implements OnInit {
  chartIcon = faChartPie;
  tableIcon = faTable;
  flagIcon = faFlag;
  userIcon = faUser;
  eraseIcon = faEraser;
  logoutIcon = faSignOutAlt;
  githubIcon = faGithub;
  isCollapsed = true;
  username = '';
  messageHistory: MessageHistory[];

  constructor(public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageHistory = this.messageService.getHistory();
  }
}
