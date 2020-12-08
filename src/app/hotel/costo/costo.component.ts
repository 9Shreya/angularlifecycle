import {MatSnackBar} from '@angular/material/snack-bar';
import {AllService} from 'src/app/services/all.service';
import {Component,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-costo',
  templateUrl: './costo.component.html',
  styleUrls: ['./costo.component.css']
})
export class CostoComponent implements OnInit {



  ngOnInit(): void {
  }
  name: string;
  phone: number;
  email;
  pass;
  cpass;
  id;
  index;
  url = 'http://localhost:3000/coustomer';
  data;
  loading = false
  constructor(private http: HttpClient,private service: AllService,private snack: MatSnackBar) {
    this.loading = true

    this.service.getcoustomer().subscribe((res) => {
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

  onDelete(obj) {
    this.service.deletecoustomer(obj.id);

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

}

