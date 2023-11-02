import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson13PageRoutingModule } from './contentlesson13-routing.module';

import { Contentlesson13Page } from './contentlesson13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson13PageRoutingModule
  ],
  declarations: [Contentlesson13Page]
})
export class Contentlesson13PageModule {}
