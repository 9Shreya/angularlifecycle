import {AllService} from 'src/app/services/all.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http';
import {Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient,private _snackBar: MatSnackBar,private service: AllService) {
    this.loading = true
    this.service.getemployee().subscribe((res) => {
      console.log(res);
      console.log(this.data);
      this.data = res.map(e => {
        this.loading = false
        return {
          id: e.payload.doc.id,
          fname: e.payload.doc.data()['fname'],
          lname: e.payload.doc.data()['lname'],
          email: e.payload.doc.data()['email'],
          mobile: e.payload.doc.data()['mobile'],
          position: e.payload.doc.data()['position'],
          address: e.payload.doc.data()['address'],
          dob: e.payload.doc.data()['dob'],
          img: e.payload.doc.data()['img'],


        }
      })
    })
  }
  url = "http://localhost:3000/employee"
  loading = false;
  ngOnInit(): void {
  }
  index;
  onDelete(obj) {
    this.service.deleteemployee(obj.id);
  }
  openSnackBar(message,action,obj) {
    let snak = this._snackBar.open(message,action,{
      duration: 5000,
    });
    snak.afterDismissed().subscribe(() => {
      console.log('hi');

    })
    snak.onAction().subscribe(() => {
      this.onDelete(obj);
    })

  }
  fname;
  lname;
  email;
  position;
  mobile;
  address;
  dob;
  id: any = Math.round(Math.random() * 1000000000);
  img = null;
  onUpdate(obj) {
    console.log(obj);

    this.id = obj.id;
    this.fname = obj.fname;
    this.lname = obj.lname;
    this.position = obj.position;
    this.mobile = obj.mobile;
    this.address = obj.address;
    this.dob = obj.dob;
    this.img = obj.img;
    this.email = obj.email;
    this.index = this.data.indexOf(obj);
    console.log(obj);

  }

  modify(obj) {
    obj.value.img = this.img
    this.service.updateemployee(obj.value.id,obj.value)
    this.fname = null
    this.lname = null
    this.email = 'white'
    this.position = null
    this.id = Math.round(Math.random() * 1000000000);
    this.mobile = null
    this.address = null
    this.dob = null
    this.img = null


  }

  onSelectFile(event) {
    console.log(event);

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

  onSelectimg(event,obj) {

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      console.log(event.target.files[0]);

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        const imgg: any = event.target.result;
        this.img = imgg;
        console.log(imgg);

        this.index = this.data.indexOf(obj)
        console.log(this.index);

        this.modiimg(obj,imgg,this.index)
      };
    }
  }

  // changephoto(colo, idfrompage, obj) {
  //   this.colorid = idfrompage
  //   this.color = colo
  //   this.id = idfrompage
  //   this.index = this.data.indexOf(obj)
  //   this.modicol(obj, colo, this.index)

  // }


  // modicol(obj, colo, index) {
  //   this.http.put(this.url + '/' + this.id,
  //     {
  //       "title": obj.title,
  //       "id": obj.id,
  //       "urls": obj.urls,
  //       "date": obj.date,
  //       "time": obj.time,
  //       "repeat": obj.rept,
  //       "note": obj.note,
  //       "paint": obj.paint,
  //       "colors": colo
  //     }).
  //     subscribe((res) => {

  //       console.log(res, colo);
  //       console.log(this.data[index]);
  //       this.data[index] = res;
  //       console.log(this.data[index]);

  //     });
  // }

  // onDeletephot(obj) {
  //   console.log(obj);

  //   this.http.delete(this.url + '/' + obj.id).subscribe((res) => {
  //     console.log(obj);

  //     this.index = this.data.indexOf(obj);
  //     this.data.splice(this.index,1);
  //     console.log("done");

  //   })

  // }
  // changephoto(imgg, idfrompage, obj) 
  changephoto(obj,idfrompage) {
    this.id = idfrompage;
    this.index = this.data.indexOf(obj)
    this.modicolo(obj,this.index)

  }


  // data-toggle="modal" data-target=".bd-example-modal-lg" (click)=onUpdate(d)

  modicolo(obj,index) {
    obj.img = null
    console.log(obj);

    this.service.updateemployee(obj.id,obj)

  }


  DeletephotofromSnack(message,action,obj) {
    let snak = this._snackBar.open(message,action,{
      duration: 5000,
    });
    snak.afterDismissed().subscribe(() => {
      console.log('hi');

    })
    snak.onAction().subscribe(() => {
      this.index = this.data.indexOf(obj)
      console.log(this.index);
      this.changephoto(obj,obj.id)
      //this.modicol(obj, this.index)
    })
    // (click)="DeletephotofromSnack('You want to delete ' +d.fname+ ' employee Photo','yes',d)"

  }
  modiimg(obj,img,index) {
    obj.img = img
    console.log(obj);

    this.service.updateemployee(obj.id,obj)
    this.fname = null
    this.lname = null
    this.email = 'white'
    this.position = null
    this.id = Math.round(Math.random() * 1000000000);
    this.mobile = null
    this.address = null
    this.dob = null
    this.img = null
  }

}

