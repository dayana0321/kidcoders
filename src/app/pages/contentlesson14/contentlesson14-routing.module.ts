import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson14Page } from './contentlesson14.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson14PageRoutingModule {}
