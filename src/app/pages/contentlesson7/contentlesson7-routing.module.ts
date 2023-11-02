import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson7Page } from './contentlesson7.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson7PageRoutingModule {}
