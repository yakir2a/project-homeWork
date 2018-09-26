import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {

 @Input() stationImg: string;

  constructor() { }

  ngOnInit() {
  }

}
