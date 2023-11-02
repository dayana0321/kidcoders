import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson9PageRoutingModule } from './contentlesson9-routing.module';

import { Contentlesson9Page } from './contentlesson9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson9PageRoutingModule
  ],
  declarations: [Contentlesson9Page]
})
export class Contentlesson9PageModule {}
