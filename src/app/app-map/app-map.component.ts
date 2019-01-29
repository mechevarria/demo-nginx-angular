import { Component, OnInit } from '@angular/core';
import { AppMapService } from './app-map.service';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.css']
})
export class AppMapComponent implements OnInit {
  geojson: any;

  constructor(private appMapService: AppMapService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.appMapService.getData().subscribe(res => {
      this.geojson = res;
      this.messageService.success('Successfully loaded map data');
    });
  }
}
