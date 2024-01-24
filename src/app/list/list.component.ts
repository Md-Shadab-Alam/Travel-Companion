import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';


interface Place{
  value:String;
  viewValue:string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  restaurants:any[] =[];
  hotels:any [] = [];
  attractions:any[] =[];
  selectedCategory:string='options'
  
  
  constructor(private dataService: DataServiceService) {
    
  }
  ngOnInit(): void {
    this.dataService.getHotels().subscribe(
      (response) => {
        this.hotels=response.data;
        console.log(this.hotels);        
      },
      (error) => {
        console.error(error);
      }
      );

      this.dataService.getResturants().subscribe(
        (response) => {
          this.restaurants=response.data;
          console.log(this.restaurants);
        },
        (error) => {
          console.error(error);
        }
      );

      this.dataService.getAttractions().subscribe(
        (response) => {
          this.attractions= response.data;
          console.log(this.attractions)
        },
        (error) => {
          console.error(error);
        }
        );
    }

  places:Place[]=[
    {value:'Restaurants', viewValue:'Restaurants'},
    {value:'Hotel', viewValue:'Hotel'},
    {value:'Attraction', viewValue:'Attraction'}
  ];
}
