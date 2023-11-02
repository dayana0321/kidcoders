import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson10PageRoutingModule } from './contentlesson10-routing.module';

import { Contentlesson10Page } from './contentlesson10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson10PageRoutingModule
  ],
  declarations: [Contentlesson10Page]
})
export class Contentlesson10PageModule {}
