import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson11Page } from './contentlesson11.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson11PageRoutingModule {}
