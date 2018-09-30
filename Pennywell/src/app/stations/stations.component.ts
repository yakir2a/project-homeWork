import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StationsService } from '../stations.service';
import { Observable } from 'rxjs';
import {
  trigger,
  style,
  animate,
  transition,
  query
} from '@angular/animations';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss'],
  animations: [
    trigger('collapsible' , [
      transition(':enter' , [
        query('.station-content-wrapper' , style({display: 'none',height: '0'})),
        query('.station-content-wrapper' , animate('0.5s' , style({display: 'block', height: '200px'})))
      ]),
      transition(':leave' , [
        query('.station-content-wrapper' , animate('0.5s' , style({display: 'none',height: '0'})))
      ])
    ])
  ]
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
