import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebCameraRoutingModule } from './web-camera-routing.module';
import { WebCameraComponent } from './web-camera.component';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [WebCameraComponent, CameraComponent],
  imports: [
    CommonModule,
    WebCameraRoutingModule,
    WebcamModule,
    FormsModule
  ]
})
export class WebCameraModule { }
