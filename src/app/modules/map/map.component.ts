import { Component, OnInit } from '@angular/core';

declare var google: any; // Declare google as a global variable

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 6.6331836, lng: 46.516638 };
  zoom = 12;

  constructor() {}

  ngOnInit(): void {
    // Optional: Obtain the user's location if needed
    /*
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    */
  }
}
