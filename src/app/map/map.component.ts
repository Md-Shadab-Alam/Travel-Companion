import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  constructor(){

  }
  ngOnInit():void{

  }
  display: any;
  zoom=14;
  places:any;
  center:google.maps.LatLngLiteral={lat:25,lng:75};
  markerOptions: google.maps.MarkerOptions={draggable:false};
  markerPositions: google.maps.LatLngLiteral[]=[];
  
  addMarker(event: google.maps.MapMouseEvent){
    if(event.latLng != null)
    this.markerPositions.push(event.latLng.toJSON());
  }

  moveMap(event:google.maps.MapMouseEvent){
    if(event.latLng!=null)
    this.center=(event.latLng.toJSON());
  }

  move(event:google.maps.MapMouseEvent){
    if(event.latLng!=null)
    this.display=event.latLng.toJSON()
  }
}

