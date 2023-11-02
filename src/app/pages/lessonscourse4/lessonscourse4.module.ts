import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lessonscourse4PageRoutingModule } from './lessonscourse4-routing.module';

import { Lessonscourse4Page } from './lessonscourse4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lessonscourse4PageRoutingModule
  ],
  declarations: [Lessonscourse4Page]
})
export class Lessonscourse4PageModule {}
