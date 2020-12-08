import {AllService} from 'src/app/services/all.service';
import {Router} from '@angular/router';

import {HttpClient} from "@angular/common/http";
import {Component,OnInit} from "@angular/core";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: "app-remainder",
  templateUrl: "./remainder.component.html",
  styleUrls: ["./remainder.component.css"],
})
export class RemainderComponent implements OnInit {
  ngOnInit(): void {}
  titled: any = 90;
  step = 1;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  panelOpenState = false;
  onclick() {
    document.getElementById("inputtag").style.display = "none";

    document.getElementById("title").style.display = "block";
  }


  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();


      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.urls = event.target.result;

        console.log(this.urls);
      };
      reader.readAsDataURL(event.target.files[0]); // read file as data url

    }
  }
  title: any = null;
  id: any = Math.round(Math.random() * 1000000000); note: any = null;
  data: any;
  remainder: any = null;
  mainder: any = null;
  index;
  page: any = 'rem';
  paint: any = null;
  urls: any = null;
  colors: any = 'white'
  tras: any;
  arch: any;
  hurl = "http://localhost:3000/data";
  remurl = "http://localhost:3000/remainder"
  archiveurl = "http://localhost:3000/archives"
  trash = "http://localhost:3000/trashes"


  loading = false
  constructor(private http: HttpClient,private router: Router,private snackbar: MatSnackBar,private service: AllService) {
    this.loading = true

    this.service.getReaminder().subscribe((res) => {
      console.log(res);
      console.log(this.data);
      this.data = res.map(e => {
        this.loading = false
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          urls: e.payload.doc.data()['urls'],
          date: e.payload.doc.data()['date'],
          time: e.payload.doc.data()['time'],
          repeat: e.payload.doc.data()['repeat'],
          note: e.payload.doc.data()['note'],
          paint: e.payload.doc.data()['paint'],
          colors: e.payload.doc.data()['colors'],
          page: e.payload.doc.data()['page'],

        }
      })
    })
  }
  onCreat(obj) {
    obj.value.urls = this.urls;
    this.service.createRemainder(obj.value).then(res => {
      this.urls = null
      this.title = null
      this.colors = 'white'
      this.note = null
      this.id = Math.round(Math.random() * 1000000000);
      this.mainder = null
      this.paint = null
      this.date = null
      this.time = null
      this.rept = ''

    }).catch(error => {
      console.log(error);
    })
    // this.http.post(this.remurl,{
    //   "title": obj.value.title,
    //   "id": obj.value.id,
    //   "urls": this.urls,
    //   "date": obj.value.date,
    //   "time": obj.value.time,
    //   "repeat": obj.value.rept,
    //   "note": obj.value.note,
    //   "paint": obj.value.paint,
    //   "colors": obj.value.colors
    // }).subscribe((res) => {
    //   this.data.push(obj.value);
    //   console.log(obj + "obj added in remainder");
    //   console.log(obj.value);

    //   obj.reset();
    //   // this.refresh()
    // });
  }
  deley(record_id) {
    let id = record_id.id
    this.service.deleteRemainder(id);
    this.service.createTrash(record_id)
  }

  createTrash(obj) {

    this.service.createTrash(obj)
  }
  // onDelete(obj) {
  //   this.http.delete(this.remurl + "/" + obj.id).subscribe((res) => {
  //     console.log(obj);
  //     this.index = this.data.indexOf(obj);
  //     this.data.splice(this.index,1);
  //     this.creatTrash(obj);
  //     console.log(obj);
  //     console.log("obj deleted form here onDelete");

  //   });
  // }
  // creatTrash(obj) {
  //   console.log(obj);
  //   this.http.post(this.trash,obj).subscribe((res) => {
  //     this.tras.push(obj);
  //     console.log(obj);
  //     console.log("obj added to creatTrash");
  //     console.log(this.tras);
  //   });
  // }
  creatArchiv(obj) {
    this.service.createArchives(obj)
    this.delet(obj.id)

  }

  creatArchive(obj) {
    obj.value.urls = this.urls;

    this.service.createArchives(obj.value).then(res => {
      this.urls = null
      this.title = null
      this.colors = 'white'
      this.note = null
      this.id = Math.round(Math.random() * 1000000000);
      this.mainder = null
      this.paint = null
      this.date = null
      this.time = null
      this.rept = ''

    }).catch(error => {
      console.log(error);
    })
    this.delet(obj.value.id)
  }

  delet(obj) {
    this.service.deleteRemainder(obj);

  }


  // onDelet(obj) {
  //   this.http.delete(this.remurl + "/" + obj.id).subscribe((res) => {
  //     this.index = this.data.indexOf(obj);
  //     this.data.splice(this.index,1);
  //     console.log("obj deleted from here");

  //   });
  // }


  mouseHover(e) {
    let ar = ['white',
      '#f28b82','#fbbc04','#fff475',
      '#ccff90','#a7ffeb','#cbf0f8','#aecbfa',
      '#d7aefb','#fdcfe8','#e6c9a8','#e8eaed']

    for (let k of ar) {
      console.log(k);

    }
  }

  ar = ['white',
    '#f28b82','#fbbc04','#fff475',
    '#ccff90','#a7ffeb','#cbf0f8','#aecbfa',
    '#d7aefb','#fdcfe8','#e6c9a8','#e8eaed']






  onUpdate(obj) {
    this.title = obj.title;
    this.id = obj.id;
    this.urls = obj.urls;
    this.remainder = obj.remainder;
    this.note = obj.note;
    this.paint = obj.paint;
    this.index = this.data.indexOf(obj);
    console.log(obj);

  }

  modify(obj) {
    obj.value.urls = this.urls
    this.service.updateRemainder(obj.value.id,obj.value)
    this.urls = null
    this.title = null
    this.colors = 'white'
    this.note = null
    this.id = Math.round(Math.random() * 1000000000);
    this.mainder = null
    this.paint = null
    this.date = null
    this.time = null
    this.rept = ''

    // console.log(obj.value);
    // this.http.put(this.remurl + '/' + this.id,{
    //   "title": obj.value.title,
    //   "id": obj.value.id,
    //   "urls": this.urls,
    //   "date": obj.value.date,
    //   "time": obj.value.time,
    //   "repeat": obj.value.rept,
    //   "note": obj.value.note,
    //   "paint": obj.value.paint,
    //   "colors": obj.value.colors
    // }).subscribe((res) => {
    //   this.data[this.index] = obj.value;
    //   console.log("obj modified");


    // });
  }

  rema: any;
  remainde(hi) {
    console.log(hi);
    this.rema = hi;
  }




  changecolo(colo,idfrompage,obj) {
    this.colorid = idfrompage
    this.color = colo
    this.id = idfrompage
    this.index = this.data.indexOf(obj)
    this.modicol(obj,colo,this.index)

  }


  modicol(obj,colo,index) {
    obj.colors = colo
    this.service.updateRemainder(obj.id,obj)
    // this.http.put(this.remurl + '/' + this.id,
    //   {
    //     "title": obj.title,
    //     "id": obj.id,
    //     "urls": obj.urls,
    //     "date": obj.date,
    //     "time": obj.time,
    //     "repeat": obj.rept,
    //     "note": obj.note,
    //     "paint": obj.paint,
    //     "colors": colo
    //   }).
    //   subscribe((res) => {

    //     console.log(res,colo);
    //     console.log(this.data[index]);
    //     this.data[index] = res;
    //     console.log(this.data[index]);

    //   });
  }


  hi: any;

  colopalet: any = null;
  colorpalet(d) {
    this.colopalet = d
  }
  colorid: any;
  color: any;
  change(obj,id) {
    this.colorid = id
    this.color = obj

  }



  takerema: any;
  takera() {
    this.takerema = true
  }
  reinder: any = null;

  changenote(obj) {
    this.colors = obj
    console.log(obj);

  }

  colopaletnote: any = null;
  colorpaletnote() {
    this.colopaletnote = true
  }

  dt: any = null;
  tm: any = null;
  rp: any = null

  remaid: any;
  remaindedatechange(date,time,rept,idfrompage,obj) {
    console.log(date,time,rept);
    this.date = date;
    this.id = idfrompage
    this.time = time;
    this.rept = rept;
    this.index = this.data.indexOf(obj)
    this.modi(obj,date,time,rept,this.index)
  }

  modi(obj,date,time,rept,index) {

    obj.date = date
    obj.time = time
    obj.repeat = rept
    this.service.updateRemainder(obj.id,obj)
    this.mainder = null
    this.paint = null
    this.date = null
    this.time = null
    this.rept = ''



    // this.http.put(this.remurl + '/' + this.id,
    //   {
    //     "title": obj.title,
    //     "id": obj.id,
    //     "urls": obj.urls,
    //     "date": date,
    //     "time": time,
    //     "repeat": rept,
    //     "note": obj.note,
    //     "paint": obj.paint,
    //     "colors": obj.colors
    //   }).
    //   subscribe((res) => {

    //     console.log(res,date);
    //     console.log(this.data[index]);
    //     this.data[index] = res;
    //     console.log(this.data[index]);

    //   });
  }


  //monts = ["Jan", "Feb", "Mar", "Apl", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

  date: any = null;
  rept: any;
  time: any = null;
  foods = ['Morning','Afternoon','Evening','Night']


  repeats = ['Daily','Weekly','Monthly','Yearly']

  remember() {
    document.getElementById("remainderpo").style.display = "none"
    document.getElementById("pickers").style.display = "block"
  }





  onSelectPaint(obj) {
    console.log("hyji");
    console.log(obj);
    this.router.navigate(['/keep/paint',obj])
  }


  openSnackBar(message,action,obj) {
    let snak = this.snackbar.open(message,action,{
      duration: 5000,
    });
    snak.afterDismissed().subscribe(() => {
      console.log('hi');

    })
    snak.onAction().subscribe(() => {
      this.deley(obj);
    })
  }

  openSnackBarrestor(message,action) {
    let snak = this.snackbar.open(message,action,{
      duration: 5000,
    });
    snak.afterDismissed().subscribe(() => {
      console.log('deleted file from here and saved in archives');

    })
  }
}
