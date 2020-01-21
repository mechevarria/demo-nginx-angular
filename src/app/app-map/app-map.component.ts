import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { AppMapService } from './app-map.service';
import { MessageService } from '../message/message.service';
import esri = __esri; // Esri TypeScript Types
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import Sketch from 'esri/widgets/Sketch';

@Component({
  selector: 'app-app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.scss']
})
export class AppMapComponent implements OnInit, OnDestroy {
  geojson: any;
  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;

  private _loaded = false;
  private _view: esri.MapView = null;

  constructor(private appMapService: AppMapService, private messageService: MessageService) {
  }

  async initMap() {
    try {
      // Configure the Map
      const graphicsLayer = new GraphicsLayer();

      const mapProperties: esri.MapProperties = {
        basemap: 'streets',
        layers: [graphicsLayer]
      };

      const map = new Map(mapProperties);

      // Initialize the MapView
      const mapViewProperties: esri.MapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: [-65.017, -16.457],
        zoom: 10,
        map: map
      };

      this._view = new MapView(mapViewProperties);

      const sketch = new Sketch({
        layer: graphicsLayer,
        view: this._view,
        creationMode: 'update',
        availableCreateTools: ['polygon', 'move']
      });

      this._view.ui.add(sketch, 'top-right');

      // wait for the map to load
      await this._view.when();
      return this._view;

    } catch (error) {
      console.error("Load Map Error: ", error);
    }
  }

  ngOnInit() {
    this.initMap().then(() => {
      this.appMapService.getData().subscribe(res => {
        this.geojson = res;
        this.messageService.success('Successfully loaded map data');
      });
    });
  }

  ngOnDestroy() {
    this._view.container = null;
  }
}
