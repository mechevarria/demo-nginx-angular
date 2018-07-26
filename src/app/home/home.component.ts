import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  icon = faHandPointer;

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
