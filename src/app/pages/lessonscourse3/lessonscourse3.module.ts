import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lessonscourse3PageRoutingModule } from './lessonscourse3-routing.module';

import { Lessonscourse3Page } from './lessonscourse3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lessonscourse3PageRoutingModule
  ],
  declarations: [Lessonscourse3Page]
})
export class Lessonscourse3PageModule {}
