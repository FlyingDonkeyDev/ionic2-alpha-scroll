import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { IonAlphaScroll } from './ion-alpha-scroll';
import { UtilModule } from './util-module';
import { DynamicComponentModule } from 'ng-dynamic';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  imports: [
    IonicModule,
    IonicImageLoader,
    CommonModule,
    DynamicComponentModule.forRoot({
      imports: [CommonModule, IonicModule, UtilModule, IonicImageLoader],
      declarations: []
    })
  ],
  declarations: [IonAlphaScroll],
  exports: [IonAlphaScroll]
})
export class IonAlphaScrollModule {}
