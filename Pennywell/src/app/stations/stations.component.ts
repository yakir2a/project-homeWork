import { Component, OnInit } from '@angular/core';
import { StationsService } from '../stations.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {

  stations : Object;
  picked: Object;

  constructor(private data : StationsService) { 
  }

  select(station : any){
    if(station === this.picked)
      station = undefined;
    this.picked = station;
  }

  ngOnInit(){
    this.stations = this.data.getStations();
    this.picked = undefined;
  }

}
