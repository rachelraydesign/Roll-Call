import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importing player list component
import { PlayerListComponent } from './player-list/player-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
