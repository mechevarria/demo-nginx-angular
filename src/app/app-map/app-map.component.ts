import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.css']
})
export class AppMapComponent implements OnInit {
  geojson: any;

  constructor() {
    this.geojson = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            title: 'Foo'
          },
          geometry: {
            type: 'Point',
            coordinates: [-66.324462890625, -16.024695711685304]
          }
        },
        {
          type: 'Feature',
          properties: {
            message: 'Bar'
          },
          geometry: {
            type: 'Point',
            coordinates: [-61.2158203125, -15.97189158092897]
          }
        },
        {
          type: 'Feature',
          properties: {
            message: 'Baz'
          },
          geometry: {
            type: 'Point',
            coordinates: [-63.29223632812499, -18.28151823530889]
          }
        }
      ]
    };
  }

  ngOnInit() {}
}
