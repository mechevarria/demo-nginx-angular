import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  host: { 'class': 'c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-show' }
})
export class SidebarComponent implements OnInit {
  isMin = false;

  constructor(private sidebarService: SidebarService, private deviceService: DeviceDetectorService) {
  }

  closeOnMobile(): void {
    if (this.deviceService.isMobile()) {
      this.sidebarService.toggleHide$.next();
    }
  }

  toggleMin(): void {
    this.isMin = !this.isMin;
    this.sidebarService.toggleMin$.next();
  }

  mouseEnter(): void {
    if (this.isMin) {
      this.sidebarService.toggleMin$.next();
    }
  }

  mouseLeave(): void {
    if (this.isMin) {
      this.sidebarService.toggleMin$.next();
    }
  }

  ngOnInit() { }
}
