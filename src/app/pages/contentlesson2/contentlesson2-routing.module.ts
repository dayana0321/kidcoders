import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson2Page } from './contentlesson2.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson2PageRoutingModule {}
