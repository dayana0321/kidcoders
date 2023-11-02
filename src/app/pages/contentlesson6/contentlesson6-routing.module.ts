import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson6Page } from './contentlesson6.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson6PageRoutingModule {}
