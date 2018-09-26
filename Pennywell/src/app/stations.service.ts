import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  stations : object;

  constructor() {
    this.stations = [
      {name : "Puttin FM" , freq : "66.6" , img : "http://res.cloudinary.com/tamirn2/image/upload/v1528391431/music.png"},
      {name : "Dribbble FM" , freq : "101.2" , img : "http://res.cloudinary.com/tamirn2/image/upload/v1528391431/228923-200.png"},
      {name : "Doge FM" , freq : "99.4" , img : "http://res.cloudinary.com/tamirn2/image/upload/v1528456221/MultiDoge.png"},
      {name : "Ballads FM" , freq : "87.1" , img : "https://res.cloudinary.com/tamirn2/image/upload/v1528456785/Headphone-icon.png"},
      {name : "Maximum FM" , freq : "142.2" , img : "https://res.cloudinary.com/tamirn2/image/upload/v1528456815/safety-icon.png"},
      {name : "Puttin FM" , freq : "66.6" , img : "http://res.cloudinary.com/tamirn2/image/upload/v1528391431/music.png"},
      {name : "Dribbble FM" , freq : "101.2" , img : "http://res.cloudinary.com/tamirn2/image/upload/v1528391431/228923-200.png"},
      {name : "Doge FM" , freq : "99.4" , img : "http://res.cloudinary.com/tamirn2/image/upload/v1528456221/MultiDoge.png"},
      {name : "Ballads FM" , freq : "87.1" , img : "https://res.cloudinary.com/tamirn2/image/upload/v1528456785/Headphone-icon.png"},
      {name : "Maximum FM" , freq : "142.2" , img : "https://res.cloudinary.com/tamirn2/image/upload/v1528456815/safety-icon.png"}      
    ];
  }
  getStations(){
    return this.stations;
  }

}
