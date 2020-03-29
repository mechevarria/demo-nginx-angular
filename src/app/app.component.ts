import { Component, AfterViewInit } from '@angular/core';
import { SidebarService } from './sidebar/sidebar.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  isMin: boolean = false;
  isHid: boolean = false;

  constructor(private sidebarService: SidebarService, private deviceService: DeviceDetectorService) {
    this.sidebarService.toggleMin$.subscribe(() => {
      this.isMin = !this.isMin;
      this.triggerResize();
    });
    this.sidebarService.toggleHide$.subscribe(() => {
      this.isHid = !this.isHid;
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

  ngAfterViewInit(): void {
    // hide sidebar by default on mobile
    if (this.deviceService.isMobile()) {
      this.sidebarService.toggleHide$.next();
    }
  }
}
