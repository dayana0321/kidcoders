import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson16PageRoutingModule } from './contentlesson16-routing.module';

import { Contentlesson16Page } from './contentlesson16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson16PageRoutingModule
  ],
  declarations: [Contentlesson16Page]
})
export class Contentlesson16PageModule {}
