import {Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  toggel() {
    if (document.getElementById("mySidenav").style.width == "250px") {
      document.getElementById('mySidenav').style.width = '0px';
      document.querySelector('main').style.marginRight = '0px';
      document.querySelector('footer').style.marginRight = '0px';
    } else {
      document.getElementById('mySidenav').style.width = '250px';
      document.querySelector('main').style.marginRight = '250px';
      document.querySelector('footer').style.marginRight = '250px';

    }
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
  onclik() {
    document.querySelector('#bton').addEventListener('click',() => {
      // window.scrollTo(0,0)
      var mybutton = document.getElementById('bton');
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          mybutton.style.display = 'block';
        } else {
          mybutton.style.display = 'none';
        }
      }
      //another way
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }


}
