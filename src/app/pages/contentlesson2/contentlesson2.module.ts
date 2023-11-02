import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson2PageRoutingModule } from './contentlesson2-routing.module';

import { Contentlesson2Page } from './contentlesson2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson2PageRoutingModule
  ],
  declarations: [Contentlesson2Page]
})
export class Contentlesson2PageModule {}
