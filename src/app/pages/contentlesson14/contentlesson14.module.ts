import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson14PageRoutingModule } from './contentlesson14-routing.module';

import { Contentlesson14Page } from './contentlesson14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson14PageRoutingModule
  ],
  declarations: [Contentlesson14Page]
})
export class Contentlesson14PageModule {}
