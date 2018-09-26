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

  constructor(private data : StationsService) { }

  ngOnInit(){
    this.stations = this.data.getStations();
  }

}
