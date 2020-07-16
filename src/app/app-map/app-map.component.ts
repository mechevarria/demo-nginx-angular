import { Component, OnInit } from '@angular/core';
import { AppMapService } from './app-map.service';
import { MessageService } from '../message/message.service';
import * as L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';
import './geoman';

@Component({
  selector: 'app-app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.css']
})
export class AppMapComponent implements OnInit {
  map: GmMap;
  layersControl: any = {
    baseLayers: {
      'Open Street Map': L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }),
      'Esri Street Map': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18,
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
      })
    }
  }
  geomanControls: GmControlOptions = {
    position: 'topleft',
    drawMarker: false,
    drawCircleMarker: false,
    drawPolyline: false,
    drawRectangle: false,
    drawCircle: false,
    editMode: false,
    dragMode: false,
    cutPolygon: false,
    removalMode: true,
    pinningOption: false,
    snappingOption: false
  };
  drawItems: GmFeatureGroup = L.featureGroup();
  options: L.MapOptions = {
    layers: [
      this.layersControl.baseLayers['Open Street Map']
    ],
    zoom: 6,
    center: L.latLng(-16.457, -65.017)
  };
  geojsonLayer: L.Layer;

  constructor(private appMapService: AppMapService, private messageService: MessageService) {
  }

  onMapReady(mapInstance: L.Map) {
    this.map = mapInstance;
    this.map.pm.addControls(this.geomanControls);

    this.map.on('pm:create', (e: any) => {
      // console.log(e.shape);
      // console.log(e.layer._latlngs);
      this.drawItems.addLayer(e.layer);
      
      // only keep the last polygon drawn
      if (this.drawItems.pm._layers.length > 1) {
        const layerId: number = this.drawItems.pm._layers[0]._leaflet_id;
        this.drawItems.removeLayer(layerId);
      }
    });
  }

  pointToLayer(feature: GeoJSON.Feature, latlng: L.LatLng): L.Marker {
    return L.marker(latlng, {
      icon: L.icon({
        iconSize: [31, 31],
        iconAnchor: [16, 31],
        popupAnchor: [0, -27],
        iconUrl: `assets/img/${feature.properties.icon}`
      })
    }).bindPopup(feature.properties.message)
  }

  ngOnInit() {
    this.appMapService.getData().subscribe(res => {
      this.geojsonLayer = L.geoJSON(res, {
        pointToLayer: (feature: GeoJSON.Feature, latlng: L.LatLng) => this.pointToLayer(feature, latlng)
      }).addTo(this.map);

      this.messageService.success('Successfully loaded map data');
    });
  }
}