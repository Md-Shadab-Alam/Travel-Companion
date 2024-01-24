import { Component } from '@angular/core';

export interface Tile{
  color : string;
  cols : number;
  rows : number;
  text : string;


}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent {
  tiles:Tile[]=[
    {text: 'Shadab', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 4, rows: 1, color: 'lightgreen'},
    
  ];
}
