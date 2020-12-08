import {Router} from '@angular/router';
import {Component,OnInit} from '@angular/core';
declare global {
  interface Window {
    Canva: any;
  }
}

let FB = window.Canva; // ok now
@Component({
  selector: 'app-rooting',
  templateUrl: './rooting.component.html',
  styleUrls: ['./rooting.component.css']
})

export class RootingComponent implements OnInit {



  constructor(public router: Router) {
  }

  allowCam() {
    let per = confirm("To allow web cam press ok")
    let text;
    if (per === true) {
      text = 'Permission granted'
      this.router.navigate(['/webApp']);
    }
    else {
      text = 'You denied'
    }
    document.getElementById("permission").innerHTML = text
  }

  ngOnInit(): void {
    // (function (c,a,n) {
    //   var w = c.createElement(a),s = c.getElementsByTagName(a)[0];
    //   w.src= n; s.parentNode.insertBefore(w,s);
    // })(document,'script','https://sdk.canva.com/designbutton/v2/api.js');




    // var script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.src = 'https://sdk.canva.com/designbutton/v2/api.js';

    // document.getElementsByTagName('script')[0].appendChild(script);
    //document.head.appendChild(script);




    // (function () {
    //   if (window.Canva && window.Canva.DesignButton) {
    //     console.log('hi');

    //     window.Canva.DesignButton.initialize({
    //       apiKey: 'YXDmsxlY2ulwZqkodOEOOd0B',
    //     }).then(function (api) {
    //       // Use "api" object or save for later
    //       api.createDesign({

    //         design: {
    //           type: 'Poster',
    //         },
    //         onDesignOpen: function (options) {
    //           console.log('ji');

    //           // Triggered when editor finishes loading and opens a new design.
    //           var designId = options.designId;
    //           // You can save designId for future use.
    //         },
    //         onDesignPublish: function (options) {
    //           // Triggered when design is published to an image.
    //           console.log('ji');

    //           var exportUrl = options.exportUrl;
    //           var designId = options.designId;
    //           console.log(exportUrl,designId);

    //           // Save the image to your server as the exportUrl will expire shortly.
    //         },
    //         onDesignClose: function () {
    //           // Triggered when editor is closed.
    //         },
    //       });
    //     });
    //   }
    // })();


  }


  allowBar() {
    let per = confirm("To allow BarCode reader to use your camera press ok")
    let text;
    if (per === true) {
      text = 'Permission granted'
      this.router.navigate(['/QrCodeBar']);
    }
    else {
      text = 'You denied'
    }
    document.getElementById("permission").innerHTML = text

  }
  imgg: any;
  hi() {
    var canvas = document.getElementById("myCanvas");
    var ctx = (<HTMLCanvasElement>canvas).getContext("2d");
    this.imgg = document.getElementById("scream");
    ctx.drawImage(this.imgg,10,10);
  };
  onDesignPublishCallback(options) {
    var exportUrl = options.exportUrl;
    var designId = options.designId;
    this.sendData(exportUrl,designId);
    console.log('ji');

  }
  sendData(url,id) {
    console.log(url,id);

  }
}