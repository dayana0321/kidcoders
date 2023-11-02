import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lessonscourse2Page } from './lessonscourse2.page';

const routes: Routes = [
  {
    path: '',
    component: Lessonscourse2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lessonscourse2PageRoutingModule {}
