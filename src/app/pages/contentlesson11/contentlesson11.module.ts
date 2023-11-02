import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson11PageRoutingModule } from './contentlesson11-routing.module';

import { Contentlesson11Page } from './contentlesson11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson11PageRoutingModule
  ],
  declarations: [Contentlesson11Page]
})
export class Contentlesson11PageModule {}
