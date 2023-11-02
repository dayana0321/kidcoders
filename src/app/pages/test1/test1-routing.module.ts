import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test1Page } from './test1.page';

const routes: Routes = [
  {
    path: '',
    component: Test1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test1PageRoutingModule {}
