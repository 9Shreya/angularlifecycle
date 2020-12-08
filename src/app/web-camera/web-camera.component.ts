import { WebcamImage } from 'ngx-webcam';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-camera',
  templateUrl: './web-camera.component.html',
  styleUrls: ['./web-camera.component.css']
})
export class WebCameraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public webcamImage: WebcamImage = null;
  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
}
