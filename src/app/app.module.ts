import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import forms module for the html page
import { FormsModule } from '@angular/forms';
//import HTTP module
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';

//import the player service
import { PlayerService } from './player.service';

//import the Http Client In Memory Web API Module and the service
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service.service';



@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent
  ],

  imports: [
    BrowserModule,
    //Add Http Client Module
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    //HttpClientInMemoryWebApiModule module intercepts HTTP requests
    HttpClientInMemoryWebApiModule.forRoot{
      InMemoryDataService, { dataEncapsulation: false }
    },
  ],

  //Add player service to the providers
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
