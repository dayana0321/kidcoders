import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson8Page } from './contentlesson8.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson8PageRoutingModule {}
