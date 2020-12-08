import {MatSnackBar} from '@angular/material/snack-bar';
import {AllService} from 'src/app/services/all.service';
import {Component,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-adminsginup',
  templateUrl: './adminsginup.component.html',
  styleUrls: ['./adminsginup.component.css']
})
export class AdminsginupComponent implements OnInit {

  name: string = '';
  phone: any;
  emaill;
  password;
  cpassword;
  id;
  index;
  url = 'http://localhost:3000/details';
  data;
  loading = false
  constructor(private http: HttpClient,private service: AllService,private snack: MatSnackBar) {
    this.loading = true

    this.service.getedetails().subscribe((res) => {
      console.log(res);
      console.log(this.data);
      this.data = res.map(e => {
        this.loading = false
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          phone: e.payload.doc.data()['phone'],
          pass: e.payload.doc.data()['pass'],
          email: e.payload.doc.data()['email'],
          cpass: e.payload.doc.data()['cpass'],
        }
      })
    })
  }
  // msg = new user('','','','','','');

  onDelete(obj) {
    this.service.deletedetails(obj.id);

  }

  onCreat(obj) {


    this.service.createdetails(obj.value).then(res => {
      this.phone = ''
      this.emaill = ''
      this.password = ''
      this.cpassword = ''
      this.id = Math.round(Math.random() * 1000000000);
      this.name = ''
      this.openSnack('Your data has been saved','OK')

    }).catch(error => {
      console.log(error);
    })
  }

  openSnack(message,action) {
    let snak = this.snack.open(message,action,{
      duration: 5000,
    });
    snak.afterDismissed().subscribe(() => {
      console.log('hi');

    })

  }

  openSnackBar(message,action,obj) {
    let snak = this.snack.open(message,action,{
      duration: 5000,
    });
    snak.afterDismissed().subscribe(() => {
      console.log('hi');

    })
    snak.onAction().subscribe(() => {
      this.onDelete(obj);
    })
  }
  ngOnInit(): void {}
}
