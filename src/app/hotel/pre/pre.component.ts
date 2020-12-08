import {Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-pre',
  templateUrl: './pre.component.html',
  styleUrls: ['./pre.component.css']
})
export class PreComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  more() {
    document.getElementById('but1').innerHTML =
      ' Practice self-care and stay centered at these spa hotels.';
    document.getElementById('butt').style.display = 'none';
  }
  more1() {
    document.getElementById('but2').innerHTML =
      '  Learn about San Antonio history at these southern destinations. ';
    document.getElementById('butt1').style.display = 'none';
  }
  more2() {
    document.getElementById('but3').innerHTML =
      ' Discover the beautiful city of Mdrid,with spectacular avenues.';
    document.getElementById('butt2').style.display = 'none';
  }
  more3() {
    document.getElementById('but4').innerHTML =
      '   Discover beautiful views and outdoor activities in Vancouver.';
    document.getElementById('butt3').style.display = 'none';
  }
  more4() {
    document.getElementById('but5').innerHTML =
      ' Find new music nad delectable dining in Nashville';
    document.getElementById('butt4').style.display = 'none';
  }
  more5() {
    document.getElementById('but6').innerHTML =
      '   Find fun with the whole family at these kid-friendly hotels.';
    document.getElementById('butt5').style.display = 'none';
  }
  more6() {
    document.getElementById('but7').innerHTML =
      '   Unwind in paradise at these resort destinations.';
    document.getElementById('butt6').style.display = 'none';
  }
}
