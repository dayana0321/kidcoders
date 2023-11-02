import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson4Page } from './contentlesson4.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson4PageRoutingModule {}
