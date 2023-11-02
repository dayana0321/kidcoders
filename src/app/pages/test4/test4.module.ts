import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Test4PageRoutingModule } from './test4-routing.module';

import { Test4Page } from './test4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Test4PageRoutingModule
  ],
  declarations: [Test4Page]
})
export class Test4PageModule {}
