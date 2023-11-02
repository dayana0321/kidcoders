import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson8PageRoutingModule } from './contentlesson8-routing.module';

import { Contentlesson8Page } from './contentlesson8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson8PageRoutingModule
  ],
  declarations: [Contentlesson8Page]
})
export class Contentlesson8PageModule {}
