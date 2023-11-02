import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lessonscourse1Page } from './lessonscourse1.page';

const routes: Routes = [
  {
    path: '',
    component: Lessonscourse1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lessonscourse1PageRoutingModule {}
