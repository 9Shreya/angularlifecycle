import {MatSnackBar} from '@angular/material/snack-bar';
import {AllService} from 'src/app/services/all.service';
import {Component,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sginup',
  templateUrl: './sginup.component.html',
  styleUrls: ['./sginup.component.css']
})
export class SginupComponent implements OnInit {
  ngOnInit() {}
  name: string;
  phonee: any;
  emaiil;
  pas: any = '';
  cpas: any = '';
  id;
  index;
  url = 'http://localhost:3000/coustomer';
  data;
  constructor(private http: HttpClient,private service: AllService,private snack: MatSnackBar) {

  }

  onCreat(obj) {


    this.service.createcoustomer(obj.value).then(res => {
      this.phonee = ''
      this.emaiil = ''
      this.pas = ''
      this.cpas = ''
      this.id = Math.round(Math.random() * 1000000000);
      this.name = ''

      document.getElementById('displ').innerHTML = '';
      document.getElementById('hi').style.display = 'block';
      this.openSnackBar('Your data has  been saved ','ok')
    }).catch(error => {
      console.log(error);
    })
  }
  openSnackBar(message,action) {
    let snak = this.snack.open(message,action,{
      duration: 5000,
    });
    snak.afterDismissed().subscribe(() => {
      console.log('hi');

    })

  }
}
