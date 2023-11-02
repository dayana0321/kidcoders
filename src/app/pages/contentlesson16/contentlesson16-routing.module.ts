import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson16Page } from './contentlesson16.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson16PageRoutingModule {}
