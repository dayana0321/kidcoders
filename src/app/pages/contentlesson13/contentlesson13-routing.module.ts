import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson13Page } from './contentlesson13.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson13PageRoutingModule {}
