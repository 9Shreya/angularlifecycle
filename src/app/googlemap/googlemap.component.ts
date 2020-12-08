import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  constructor(private routes: Router) { }

  ngOnInit() {
    this.setCurrentLocation();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );



  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
        console.log(this.latitude);

      });
    }
  }
  selectedMarker;

  markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    { lat: 24.269360, lng: 80.756653, value: 'Mahir Mandir' },
    { lat: 25.1788, lng: 80.8655, value: 'Chitrakoot' },
    { lat: 33.3049, lng: 75.2012, value: 'Ramban' },
    { lat: 23.1254, lng: 79.8134, value: 'Dhuadhar Jabalpur' },
    { lat: 23.4802, lng: 77.7401, value: 'Sanchi Stupa' }
  ];

  addMarker() {

  }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude

    };
    console.log(event);
    console.log(event.latitude);

  }


  onClickInfoView(m) {
    console.log(m);
    for (let data of this.markers) {
      console.log(data.value);

      if (data.value === this.valueforinput) {
        console.log(this.valueforinput);

        this.getDistanceFromLatLonInKm(this.latitude, this.longitude, data.lat, data.lng, m)
        console.log(m);

      }
    }
  }
  goto() {

    this.routes.navigate(['/direction'])
  }

  myControl: FormControl = new FormControl();
  options: string[] = ['Mahir Mandir', 'Chitrakoot', 'Ramban', 'Dhuadhar Jabalpur', 'Sanchi Stupa'];
  filteredOptions: Observable<string[]>;
  valueforinput: any;

  h: any;
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.h = this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    console.log(this.h[0]);

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }



  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2, place) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    console.log(d)
    document.getElementById("distance").innerHTML = "Distance from current locaton to " +
      place + " is " + d + " Km"
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

}