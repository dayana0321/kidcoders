import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lessonscourse2PageRoutingModule } from './lessonscourse2-routing.module';

import { Lessonscourse2Page } from './lessonscourse2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lessonscourse2PageRoutingModule
  ],
  declarations: [Lessonscourse2Page]
})
export class Lessonscourse2PageModule {}
