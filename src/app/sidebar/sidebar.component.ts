import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  isMin = false;

  constructor(private sidebarService: SidebarService) {
  }

  closeOnMobile(): void {
    if (window.innerWidth < 640) {
      this.sidebarService.toggleHide$.next();
    }
  }

  toggleMin(): void {
    this.isMin = !this.isMin;
    this.sidebarService.toggleMin$.next();
  }

  mouseEnter(): void {
    if(this.isMin) {
      this.sidebarService.toggleMin$.next();
    }
  }

  mouseLeave(): void {
    if(this.isMin) {
      this.sidebarService.toggleMin$.next();
    }
  }

  ngOnInit() {}
}
