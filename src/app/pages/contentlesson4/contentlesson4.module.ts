import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson4PageRoutingModule } from './contentlesson4-routing.module';

import { Contentlesson4Page } from './contentlesson4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson4PageRoutingModule
  ],
  declarations: [Contentlesson4Page]
})
export class Contentlesson4PageModule {}
