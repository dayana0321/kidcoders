import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson7PageRoutingModule } from './contentlesson7-routing.module';

import { Contentlesson7Page } from './contentlesson7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson7PageRoutingModule
  ],
  declarations: [Contentlesson7Page]
})
export class Contentlesson7PageModule {}
