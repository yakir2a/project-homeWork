import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() pickedEvent = new EventEmitter<Object>();

  constructor(private data : StationsService) { 
  }

  select(station : any){
    if(station === this.picked)
      this.picked = undefined;
    else
      this.picked = station;
    this.pickedEvent.emit(this.picked);
  }

  ngOnInit(){
    this.stations = this.data.getStations();
    this.picked = undefined;
  }

}
