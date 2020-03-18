import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(private sidebarService: SidebarService) {
  }

  closeOnMobile(): void {
    if (window.innerWidth < 640) {
      this.sidebarService.toggleHide$.next();
    }
  }

  toggleMin(): void {
    this.sidebarService.toggleMin$.next();
  }

  ngOnInit() {}
}
