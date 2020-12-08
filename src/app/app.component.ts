import {Component,OnInit} from '@angular/core';
import {AllService} from './services/all.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularlifecycle';
  c: any;
  data;
  ctx: any;
  constructor(public service: AllService) {
    this.service.getNote().subscribe((res) => {
      console.log(res);
      console.log(this.data);
      this.data = res.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name']
        }
      })
    })
  }

  base64String: any;
  ngOnInit() {
    this.hi()
  }
  hi() {
    console.log(this.data);
  }
  // sub(form) {
  //   this.service.createNote(form.value)
  // }
  name;
  hello
  //   ged() {

  //     console.log("hi");

  //     this.c = document.createElement('canvas');
  //     this.imgg = document.getElementById('Img1');
  //     this.c.height = 100;
  //     this.c.width = 100;
  //     this.ctx = this.c.getContext('2d');

  //     console.log(this.ctx);
  //     console.log("hello");
  //     console.log(this.ctx);

  //     this.hi = this.ctx.drawImage(this.imgg, 0, 0, this.c.width, this.c.height);
  //     this.base64String = this.hi.toDataURL();
  //     console.log(this.base64String);
  //     console.log("hi");
  //   }
  //   imgf: any;
  //   helo: any;

  //   encode() {
  //     var selectedfile = (<HTMLInputElement>document.getElementById("myinput")).files;
  //     if (selectedfile.length > 0) {
  //       var imageFile = selectedfile[0];
  //       var fileReader = new FileReader();
  //       fileReader.onload = function (fileLoadedEvent) {
  //         let srcData = fileLoadedEvent.target.result;
  //         let newImage: HTMLImageElement = document.createElement('img');
  //         newImage.src = <string>srcData;

  //         document.getElementById("dummy").innerHTML = newImage.outerHTML;

  //         (<HTMLInputElement>document.getElementById("txt")).value = document.getElementById("dummy").innerHTML;
  //       }
  //       fileReader.readAsDataURL(imageFile);
  //     }
  //   }




}
