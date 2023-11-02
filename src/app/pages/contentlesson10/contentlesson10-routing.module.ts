import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson10Page } from './contentlesson10.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson10PageRoutingModule {}
