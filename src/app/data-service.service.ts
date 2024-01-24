import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private apiURL = 'https://travel-advisor.p.rapidapi.com';
  // blLatitude: 25;
  // blLongitude: 75;
  // trLongitude: 78;
  // trLatitude: 28;
  

  constructor(private http: HttpClient) { }

   //const url = `${this.apiURL}/hotels/list-in-boundary?bl_latitude=11.847676&bl_longitude=108.473209&tr_longitude=109.149359&tr_latitude=12.838442&limit=30&currency=USD&subcategory=hotel%2Cbb%2Cspecialty&adults=1`

   getHotels(): Observable<any> {
    const url = `${this.apiURL}/hotels/list-in-boundary?bl_latitude=25&bl_longitude=75&tr_longitude=78&tr_latitude=28&limit=30&currency=USD&subcategory=hotel%2Cbb%2Cspecialty&adults=1`

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '23747eed75mshd82dd7c1efaa5abp1899c0jsnc06c196bca96',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    });

    return this.http.get(url,{headers});
    }


   getResturants():Observable<any>{
    const url = `${this.apiURL}/restaurants/list-in-boundary?bl_latitude=25&tr_latitude=28&bl_longitude=75&tr_longitude=78&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US`

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '23747eed75mshd82dd7c1efaa5abp1899c0jsnc06c196bca96',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    });
    return this.http.get(url,{headers});
  }

   getAttractions():Observable<any>{
    const url = `${this.apiURL}/attractions/list-in-boundary?tr_longitude=78&tr_latitude=28&bl_longitude=75&bl_latitude=25&currency=USD&lunit=km&lang=en_US`

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '23747eed75mshd82dd7c1efaa5abp1899c0jsnc06c196bca96',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    });
    return this.http.get(url,{headers});
   }
};
