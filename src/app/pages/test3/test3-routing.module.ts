import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test3Page } from './test3.page';

const routes: Routes = [
  {
    path: '',
    component: Test3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test3PageRoutingModule {}
