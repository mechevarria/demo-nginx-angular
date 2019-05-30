import { Component, OnInit, HostListener } from '@angular/core';
import { MessageItem } from '../message/message-item';
import { faEraser, faSignOutAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MessageHistoryService } from '../message/message-history.service';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  styleUrls: ['./header.component.css'],
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  eraseIcon: IconDefinition = faEraser;
  logoutIcon: IconDefinition = faSignOutAlt;
  sidebarVisible: boolean = true;
  username: string = '';
  messages: MessageItem[];

  constructor(private messageHistoryService: MessageHistoryService, public sidebarService: SidebarService) {
    // hide sidebar by default on mobile
    this.checkForMobile();
  }

  @HostListener('window:resize', ['$event'])
  checkForMobile(event?) {
    if (window.innerWidth < 640) {
      this.sidebarService.toggleSidebar();
    }
  }

  clear() {
    this.messageHistoryService.clear();
  }

  ngOnInit(): void {
    this.messages = this.messageHistoryService.getHistory();
  }
}
