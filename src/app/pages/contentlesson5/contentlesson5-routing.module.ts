import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson5Page } from './contentlesson5.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson5PageRoutingModule {}
