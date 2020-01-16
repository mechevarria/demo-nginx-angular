import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { AppMapService } from './app-map.service';
import { MessageService } from '../message/message.service';
import esri = __esri; // Esri TypeScript Types
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';

@Component({
  selector: 'app-app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.scss']
})
export class AppMapComponent implements OnInit, OnDestroy {
  geojson: any;
  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;

  private _zoom = 10;
  private _center: Array<number> = [0.1278, 51.5074];
  private _basemap = 'streets';
  private _loaded = false;
  private _view: esri.MapView = null;

  constructor(private appMapService: AppMapService, private messageService: MessageService) {
  }

  async initMap() {
    try {
      // Configure the Map
      const mapProperties: esri.MapProperties = {
        basemap: this._basemap
      };

      const map = new Map(mapProperties);

      // Initialize the MapView
      const mapViewProperties: esri.MapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: this._center,
        zoom: this._zoom,
        map: map
      };

      this._view = new MapView(mapViewProperties);

      // wait for the map to load
      await this._view.when();
      return this._view;

    } catch (error) {
      console.error("Load Map Error: ", error);
    }
  }

  ngOnInit() {
    this.initMap().then((mapView) => {
      this.messageService.success('Successfully loaded map');
    });

    // this.appMapService.getData().subscribe(res => {
    //   this.geojson = res;
    //   this.messageService.success('Successfully loaded map data');
    // });
  }

  ngOnDestroy() {
    this._view.container = null;
  }
}
