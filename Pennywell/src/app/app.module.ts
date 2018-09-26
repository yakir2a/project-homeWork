import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StationComponent } from './station/station.component';
import { StationsComponent } from './stations/stations.component';
import { PlayingComponent } from './playing/playing.component';

@NgModule({
  declarations: [
    AppComponent,
    StationComponent,
    StationsComponent,
    PlayingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
