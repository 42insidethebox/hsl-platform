import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {
  private map: any;

  constructor() {}

  ngOnInit(): void {
    // Set the initial map configuration
    this.map = L.map('map').setView([51.505, -0.09], 13);

    // Add an OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  ngAfterViewInit(): void {
    // Add user location marker after the map is initialized
    this.addUserLocation();
  }

  private addUserLocation(): void {
    // Check if geolocation is available in the browser
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        // Add a marker at the user's location
        L.marker([userLat, userLng]).addTo(this.map);
      });
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  }
}
