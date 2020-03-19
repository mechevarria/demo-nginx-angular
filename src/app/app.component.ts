import { Component, ViewChild, ElementRef } from '@angular/core';
import { SidebarService } from './sidebar/sidebar.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('sidebar', { read: ElementRef })
  private sidebar: ElementRef;

  constructor(private sidebarService: SidebarService, private deviceService: DeviceDetectorService) {
    this.sidebarService.toggleMin$.subscribe(() => {
      this.sidebar.nativeElement.classList.toggle('c-sidebar-minimized');
      this.triggerResize();
    });
    this.sidebarService.toggleHide$.subscribe(() => {
      this.sidebar.nativeElement.classList.toggle('c-sidebar-show');
      this.triggerResize();
    });
  }

  triggerResize(): void {
    // triggering this event so that the mapbox api will auto resize the map
    if (this.deviceService.isDesktop()) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 200);
    }
  }
}
