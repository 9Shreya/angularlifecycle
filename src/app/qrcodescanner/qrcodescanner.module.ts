import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrcodescannerRoutingModule } from './qrcodescanner-routing.module';
import { QrcodescannerComponent } from './qrcodescanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { FormatingComponent } from './formating/formating.component';


@NgModule({
  declarations: [QrcodescannerComponent, FormatingComponent],
  imports: [
    CommonModule,
    QrcodescannerRoutingModule,
    ZXingScannerModule,
    MaterialModule
  ]
})
export class QrcodescannerModule { }
