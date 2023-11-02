import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson15PageRoutingModule } from './contentlesson15-routing.module';

import { Contentlesson15Page } from './contentlesson15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson15PageRoutingModule
  ],
  declarations: [Contentlesson15Page]
})
export class Contentlesson15PageModule {}
