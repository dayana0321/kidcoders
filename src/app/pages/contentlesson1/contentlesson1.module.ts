import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson1PageRoutingModule } from './contentlesson1-routing.module';

import { Contentlesson1Page } from './contentlesson1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson1PageRoutingModule
  ],
  declarations: [Contentlesson1Page]
})
export class Contentlesson1PageModule {}
