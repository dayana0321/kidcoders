import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contentlesson3Page } from './contentlesson3.page';

const routes: Routes = [
  {
    path: '',
    component: Contentlesson3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contentlesson3PageRoutingModule {}
