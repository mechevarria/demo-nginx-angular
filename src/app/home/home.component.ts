import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {faHandPointer, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  icon: IconDefinition;

  constructor(public route: ActivatedRoute) {
    this.icon = faHandPointer;
  }

  ngOnInit() {
  }

}
