import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebCameraComponent } from './web-camera.component';

const routes: Routes = [
  {
    path: 'webApp', component: WebCameraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebCameraRoutingModule { }
