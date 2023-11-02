import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lessonscourse1PageRoutingModule } from './lessonscourse1-routing.module';

import { Lessonscourse1Page } from './lessonscourse1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lessonscourse1PageRoutingModule
  ],
  declarations: [Lessonscourse1Page]
})
export class Lessonscourse1PageModule {}
