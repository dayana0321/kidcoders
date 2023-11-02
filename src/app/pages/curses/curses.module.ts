import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursesPageRoutingModule } from './curses-routing.module';

import { CursesPage } from './curses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursesPageRoutingModule
  ],
  declarations: [CursesPage]
})
export class CursesPageModule {}
