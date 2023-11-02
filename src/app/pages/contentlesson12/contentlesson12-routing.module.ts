import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson12Page } from './contentlesson12.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson12PageRoutingModule {}
