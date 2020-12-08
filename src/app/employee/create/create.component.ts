import {Routes,Router} from '@angular/router';
import {AllService} from 'src/app/services/all.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http';
import {Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  fname;
  lname;
  email;
  position;
  mobile;
  address;
  dob;
  id: any = Math.round(Math.random() * 1000000000);
  img = null;
  data;
  url = "http://localhost:3000/employee"


  // , private snackBar: MatSnackBar

  constructor(private http: HttpClient,private snackBar: MatSnackBar,private service: AllService,private routes: Router) {

  }

  onCreate(obj) {
    obj.value.img = this.img;
    this.service.createemployee(obj.value).then(res => {
      this.fname = null
      this.lname = null
      this.email = 'white'
      this.position = null
      this.id = Math.round(Math.random() * 1000000000);
      this.mobile = null
      this.address = null
      this.dob = null
      this.img = null



    }).catch(error => {
      console.log(error);
    })
  }




  // onCreate(obj) {
  //   console.log(obj.value);
  //   this.http.post(this.url,obj.value).subscribe((res) => {
  //     this.data.push(obj.value)
  //     obj.reset();
  //   }
  // }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      console.log(event.target.files[0]);

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        const img: any = event.target.result;
        this.img = img;
        console.log(img);

      };
    }
  }

  openSnack(message: string,action: string) {
    let snak = this.snackBar.open(message,action,{
      duration: 5000,
    });
    snak.afterDismissed().subscribe(() => {
      console.log('hi');

    })
    snak.onAction().subscribe(() => {
      this.routes.navigate(['/emp/view'])
    })
  }
  //(click)="openSnack('Employee data got added','ok')"
  // ( click)="openSnackBar('Employee data got added','') "

  ngOnInit(): void {
  }

}
