import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InMemoryApiService implements InMemoryDbService {
  createDb() {
    // tslint:disable-next-line:prefer-const
    let geojsonMock: any = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            message: 'This is a danger icon',
            icon: 'marker-danger.svg'
          },
          geometry: {
            type: 'Point',
            coordinates: [-66.324462890625, -16.024695711685304]
          }
        },
        {
          type: 'Feature',
          properties: {
            message: 'This is a success icon',
            icon: 'marker-success.svg'
          },
          geometry: {
            type: 'Point',
            coordinates: [-61.2158203125, -15.97189158092897]
          }
        },
        {
          type: 'Feature',
          properties: {
            message: 'This is a info icon',
            icon: 'marker-info.svg'
          },
          geometry: {
            type: 'Point',
            coordinates: [-63.29223632812499, -18.28151823530889]
          }
        },
        {
          type: 'Feature',
          properties: {
            message: 'This is a primary icon',
            icon: 'marker-primary.svg'
          },
          geometry: {
            type: 'Point',
            coordinates: [-62.29223632812499, -17.28151823530889]
          }
        },
        {
          type: 'Feature',
          properties: {
            message: 'This is a warning icon',
            icon: 'marker-warning.svg'
          },
          geometry: {
            type: 'Point',
            coordinates: [-64.29223632812499, -17.18151823530889]
          }
        }
      ]
    };

    return { geojsonMock };
  }
}
