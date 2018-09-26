import { Component , OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.scss']
})
export class PlayingComponent implements OnInit {

  @Input() playing: string;

  constructor() { }

  ngOnInit() {
    this.playing = undefined;
  }

}
