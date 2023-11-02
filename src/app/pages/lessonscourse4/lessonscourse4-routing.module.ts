import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lessonscourse4Page } from './lessonscourse4.page';

const routes: Routes = [
  {
    path: '',
    component: Lessonscourse4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lessonscourse4PageRoutingModule {}
