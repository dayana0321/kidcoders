import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contentlesson3PageRoutingModule } from './contentlesson3-routing.module';

import { Contentlesson3Page } from './contentlesson3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contentlesson3PageRoutingModule
  ],
  declarations: [Contentlesson3Page]
})
export class Contentlesson3PageModule {}
