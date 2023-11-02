import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursesPage } from './curses.page';

const routes: Routes = [
  {
    path: '',
    component: CursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursesPageRoutingModule {}
