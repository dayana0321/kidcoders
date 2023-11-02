import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson1Page } from './contentlesson1.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson1PageRoutingModule {}
