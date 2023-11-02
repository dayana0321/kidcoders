import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson6PageRoutingModule } from './contentlesson6-routing.module';

import { Contentlesson6Page } from './contentlesson6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson6PageRoutingModule
  ],
  declarations: [Contentlesson6Page]
})
export class Contentlesson6PageModule {}
