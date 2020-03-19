import { Component, ViewChild, ElementRef } from '@angular/core';
import { SidebarService } from './sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('sidebar', { read: ElementRef })
  private sidebar: ElementRef;

  constructor(private sidebarService: SidebarService) {
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
    if (window.innerWidth > 640) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 200);
    }
  }
}
