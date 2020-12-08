import {MatSnackBar} from '@angular/material/snack-bar';
import {AllService} from 'src/app/services/all.service';
import {user} from './../adminsginup/user';
import {Component,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-editla',
  templateUrl: './editla.component.html',
  styleUrls: ['./editla.component.css']
})
export class EditlaComponent implements OnInit {



  ngOnInit(): void {
  }
  name: string;
  phone: number;
  email;
  pass;
  cpass;
  id;
  index;
  url = 'http://localhost:3000/details';
  data;
  loading = false
  constructor(private http: HttpClient,private service: AllService,private snack: MatSnackBar) {
    this.loading = true

    this.service.getedetails().subscribe((res) => {
      console.log(res);
      this.data = res.map(e => {
        this.loading = false
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          phone: e.payload.doc.data()['phone'],
          pass: e.payload.doc.data()['pass'],
          email: e.payload.doc.data()['email'],
        }
      })
    })
  }
  msg = new user('','','','','');

  onUpdate(obj) {
    this.msg.name = obj.name;
    this.msg.phone = obj.phone;
    this.msg.email = obj.email;
    this.msg.pass = obj.pass;
    this.id = obj.id;
    //  this.index = this.data.indexOf(obj);
    console.log('hello');
  }

  onModify(obj) {
    console.log(obj.value.id,obj.value.name);
    this.loading = true
    this.service.updatedetails(obj.value.id,obj.value)
    console.log();

    this.msg.name = ''
    this.msg.phone = ''
    this.msg.email = ''
    this.msg.pass = ''
    this.id = ''
    this.loading = false
    this.openSnack('Your data has been modified successfully','OK')

  }
  openSnack(message,action) {
    let snak = this.snack.open(message,action,{
      duration: 5000,
    });
    snak.afterDismissed().subscribe(() => {
      console.log('hi');

    })

  }

}



