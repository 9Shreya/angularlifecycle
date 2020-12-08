import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcodescannerComponent } from './qrcodescanner.component';

const routes: Routes = [
  {
    path: 'QrCodeBar', component: QrcodescannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrcodescannerRoutingModule { }
