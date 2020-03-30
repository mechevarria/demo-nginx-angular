import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar/sidebar.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isMin: boolean = false;
  isShown: boolean = true;

  constructor(private sidebarService: SidebarService, private deviceService: DeviceDetectorService) {
    this.sidebarService.toggleMin$.subscribe(() => {
      this.isMin = !this.isMin;
      this.triggerResize();
    });
    this.sidebarService.toggleHide$.subscribe(() => {
      this.isShown = !this.isShown;
      this.triggerResize();
    });
  }

  triggerResize(): void {
    // triggering this event so that the mapbox will auto resize the map
    if (this.deviceService.isDesktop()) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 200);
    }
  }

  doHide(): void {
    this.sidebarService.toggleHide$.next();
  }

  isMobile(): boolean {
    return this.deviceService.isMobile();
  }

  ngOnInit(): void {
    // hide sidebar by default on mobile
    if (this.deviceService.isMobile()) {
      this.isShown = false;
    }
  }
}
