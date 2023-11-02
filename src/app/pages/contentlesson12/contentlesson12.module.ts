import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson12PageRoutingModule } from './contentlesson12-routing.module';

import { Contentlesson12Page } from './contentlesson12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson12PageRoutingModule
  ],
  declarations: [Contentlesson12Page]
})
export class Contentlesson12PageModule {}
