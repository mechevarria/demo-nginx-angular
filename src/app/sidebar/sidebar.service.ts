import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public toggleMin$: Subject<any> = new Subject();
  public toggleHide$: Subject<any> = new Subject();

  constructor() {
  }
}
