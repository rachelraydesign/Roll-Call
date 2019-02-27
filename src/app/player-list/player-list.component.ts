import { Component, OnInit } from '@angular/core';

//Importing player interface to the list. 
import { iPlayer } from '../player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  //Creating interface with iPlayer
  private players: iPlayer[] = [
    {
      id: 1,
      text: 'loading'
    },
    {
      id: 2,
      text: 'loading'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
