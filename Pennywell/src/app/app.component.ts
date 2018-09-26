import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  current : object

  constructor(){
    this.current = undefined
  }
  
  playingEventHandler($event : any){
    if($event === undefined)
      this.current = undefined;
    else
      this.current = $event.name
  }
}
