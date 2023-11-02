import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson5PageRoutingModule } from './contentlesson5-routing.module';

import { Contentlesson5Page } from './contentlesson5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson5PageRoutingModule
  ],
  declarations: [Contentlesson5Page]
})
export class Contentlesson5PageModule {}
