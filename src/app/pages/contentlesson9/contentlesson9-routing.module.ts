import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson9Page } from './contentlesson9.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson9PageRoutingModule {}
