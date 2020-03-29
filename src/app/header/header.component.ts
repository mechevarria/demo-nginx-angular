import { Component, OnInit } from '@angular/core';
import { MessageItem } from '../message/message-item';
import { MessageHistoryService } from '../message/message-history.service';
import { SidebarService } from '../sidebar/sidebar.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  styleUrls: ['./header.component.css'],
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  accountUrl: string;
  isLoggedIn: boolean = false;
  sidebarVisible: boolean = true;
  username: string = 'Guest';
  messages: MessageItem[];

  constructor(private messageHistoryService: MessageHistoryService, private sidebarService: SidebarService, private keycloak: KeycloakService) {
  }

  toggleSidebar(): void {
    this.sidebarService.toggleHide$.next();
  }

  doLogout(): void {
    if (this.isLoggedIn) {
      this.keycloak.logout();
    }
  }

  doAccount(): void {
    if (this.isLoggedIn) {
      window.open(this.accountUrl, '_blank');
    }
  }

  clear() {
    this.messageHistoryService.clear();
  }

  ngOnInit(): void {
    this.messages = this.messageHistoryService.getHistory();

    this.keycloak.isLoggedIn().then(isLoggedIn => {
      if (isLoggedIn) {
        this.isLoggedIn = true;
        this.username = this.keycloak.getUsername();

        const instance = this.keycloak.getKeycloakInstance();
        this.accountUrl = `${instance.authServerUrl}/realms/${instance.realm}/account`;
      }
    });
  }
}
