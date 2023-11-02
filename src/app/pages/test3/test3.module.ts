import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Test3PageRoutingModule } from './test3-routing.module';

import { Test3Page } from './test3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Test3PageRoutingModule
  ],
  declarations: [Test3Page]
})
export class Test3PageModule {}
