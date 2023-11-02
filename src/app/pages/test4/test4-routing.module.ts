import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test4Page } from './test4.page';

const routes: Routes = [
  {
    path: '',
    component: Test4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test4PageRoutingModule {}
