import { Component, OnInit } from '@angular/core';
import { AppMapService } from './app-map.service';
import { MessageService } from '../message/message.service';
import { tileLayer, latLng, Map, FeatureGroup, featureGroup, DrawEvents, Control, icon, geoJSON, marker, LatLng, Layer, MapOptions } from 'leaflet';

@Component({
  selector: 'app-app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.css']
})
export class AppMapComponent implements OnInit {
  map: Map;
  layersControl: any = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }),
      'Esri Street Map': tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18,
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
      })
    }
  }
  options: MapOptions = {
    layers: [
      this.layersControl.baseLayers['Open Street Map']
    ],
    zoom: 6,
    center: latLng(-16.457, -65.017)
  };
  drawItems: FeatureGroup = featureGroup();
  geojsonLayer: Layer;
  drawOptions: Control.DrawConstructorOptions = {
    draw: {
      polyline: false,
      rectangle: false,
      circle: false,
      marker: false,
      circlemarker: false
    },
    edit: {
      featureGroup: this.drawItems
    }
  }

  constructor(private appMapService: AppMapService, private messageService: MessageService) {
  }

  onMapReady(mapInstance: Map) {
    this.map = mapInstance;
  }

  onDrawCreated(e: any) {
    this.drawItems.addLayer((e as DrawEvents.Created).layer);
  }

  pointToLayer(feature: GeoJSON.Feature, latlng: LatLng): any {
    return marker(latlng, {
      icon: icon({
        iconSize: [31, 31],
        iconAnchor: [16, 31],
        popupAnchor: [0, -27],
        iconUrl: `assets/img/${feature.properties.icon}`
      })
    }).bindPopup(feature.properties.message)
  }

  ngOnInit() {
    this.appMapService.getData().subscribe(res => {
      this.geojsonLayer = geoJSON(res, {
        pointToLayer: (feature: GeoJSON.Feature, latlng: LatLng) => this.pointToLayer(feature, latlng)
      }).addTo(this.map);

      this.messageService.success('Successfully loaded map data');
    });
  }
}