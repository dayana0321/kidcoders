import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lessonscourse3Page } from './lessonscourse3.page';

const routes: Routes = [
  {
    path: '',
    component: Lessonscourse3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lessonscourse3PageRoutingModule {}
