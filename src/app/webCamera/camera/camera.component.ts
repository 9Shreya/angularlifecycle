import {Component,OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  urls: any;

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      console.log(event.target.files[0]);

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        const img: any = event.target.result;
        this.urls = img;
        console.log(img);

      };
    }
  }




  constructor() {}
  ngOnInit() {}


  playSound(url) {
    this.snd = new Audio()
    this.snd.src = url
    this.snd.load();
    this.snd.play();
    // source is global so we can call .stop() later.

    // Play immediately.
    console.log("hi");
  }
  togglle() {
    this.snd.pause();
  }

  snd;
  // removeMAtchAnstionansMedia(index,i) {
  //   this.matchTheFollowing.answer[i].option_media.splice(index,1);
  //   //  this.mydatawith[i].splice(index,1);

  //   console.log(this.matchTheFollowing.answer[i].option_media)
  //   console.log(index);
  //   this.url = null;
  // }

}
