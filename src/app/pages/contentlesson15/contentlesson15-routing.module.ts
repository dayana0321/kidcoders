import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson15Page } from './contentlesson15.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson15PageRoutingModule {}
