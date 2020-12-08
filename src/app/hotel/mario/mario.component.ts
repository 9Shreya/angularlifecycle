import {Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-mario',
  templateUrl: './mario.component.html',
  styleUrls: ['./mario.component.css']
})
export class MarioComponent implements OnInit {

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
  constructor() {}
  handler: any = null;
  ngOnInit() {

    this.loadStripe();
  }

  pay(amount) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });

  }

  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }
}
