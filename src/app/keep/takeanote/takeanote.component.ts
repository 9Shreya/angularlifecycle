import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {Component,OnInit} from "@angular/core";
import {MatSnackBar} from '@angular/material/snack-bar';
import {AllService} from 'src/app/services/all.service';


@Component({
  selector: "app-takeanote",
  templateUrl: "./takeanote.component.html",
  styleUrls: ["./takeanote.component.css"],
})
export class TakeanoteComponent implements OnInit {
  ngOnInit(): void {}

  page: any = 'note';
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
      console.log(event.target.files[0]);

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        const img: any = event.target.result;
        this.urls = img;
        console.log(img);

      };
    }
  }
  title: any = null;
  id: any = Math.round(Math.random() * 1000000000);
  note: any = null;
  mainder: any = null;
  paint: any = null;
  urls: any = null;
  colors: any = "white";
  remain: any;
  arch: any;
  tras: any;
  data: any;
  remainder: any;
  index;
  date: any = null;
  rept: any;
  time: any = null;

  hurl = "http://localhost:3000/data";
  remurl = "http://localhost:3000/remainder"
  archiveurl = "http://localhost:3000/archives"
  trash = "http://localhost:3000/trashes"
  arurl = "http://localhost:3000/ar"
  ul = "http://localhost:3000/details"
  loading = false
  constructor(private http: HttpClient,public router: Router,private snackbar: MatSnackBar,public service: AllService) {


    // this.http.get(this.hurl).subscribe((res) => {
    //   this.data = res;
    //   console.log(res);
    // });
    this.loading = true

    this.service.getNote().subscribe((res) => {

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
    this.service.createNote(obj.value).then(res => {
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
  }


  // onCreat(obj) {


  //   if (this.title != null || this.urls != null ||
  //     this.paint != null || this.note != null
  //   ) {
  //     console.log(obj);
  //     console.log(obj.value);
  //     console.log(this.data);



  //     this.http.post(this.hurl,{
  //       "title": obj.value.title,
  //       "id": obj.value.id,
  //       "urls": this.urls,
  //       "date": obj.value.date,
  //       "time": obj.value.time,
  //       "repeat": obj.value.rept,
  //       "note": obj.value.note,
  //       "paint": obj.value.paint,
  //       "colors": obj.value.colors
  //     }).subscribe((res) => {
  //       this.data.push(obj.value);
  //       console.log(this.data);
  //       console.log(obj.value);
  //       obj.reset();
  //       // this.refresh();
  //       // this.refresh()
  //       // this.router.navigate(['/keep/edit'])
  //       //   this.router.navigate(
  //       //     [
  //       //        '/keep/edit',
  //       //        {
  //       //           key: 'value',

  //       //        }
  //       //     ]
  //       //  );

  //     });
  //   }
  // }

  deley(record_id) {
    let id = record_id.id
    this.service.deleteNote(id);
    this.service.createTrash(record_id)
  }

  createTrash(obj) {

    this.service.createTrash(obj)
  }
  // onDelete(obj) {
  //   this.http.delete(this.hurl + "/" + obj.id).subscribe((res) => {
  //     console.log(obj);
  //     this.index = this.data.indexOf(obj);
  //     this.data.splice(this.index,1);
  //     this.creatTrash(obj);
  //   });
  // }
  // creatTrash(obj) {
  //   console.log(obj);
  //   this.http.post(this.trash,obj).subscribe((res) => {
  //     this.tras.push(obj);
  //     console.log(this.tras);
  //   });
  // }

  onUpdate(obj) {
    this.title = obj.title;
    this.id = obj.id;
    this.urls = obj.urls;
    this.dt = obj.date;
    this.tm = obj.time;
    this.rp = obj.repeat;
    this.note = obj.note;
    this.paint = obj.paint;
    this.colors = obj.colors;
    this.index = this.data.indexOf(obj);
    console.log(obj);
  }

  // modify(obj) {
  //   this.http.put(this.hurl + '/' + this.id,{
  //     "title": obj.title,
  //     "id": obj.value.id,
  //     "urls": this.urls,
  //     "date": obj.value.date,
  //     "time": obj.value.time,
  //     "repeat": obj.value.rept,
  //     "note": obj.value.note,
  //     "paint": obj.value.paint,
  //     "colors": obj.value.colors
  //   }).subscribe((res) => {
  //     this.data[this.index] = obj.value;
  //   });
  // }
  modify(obj) {
    obj.value.urls = this.urls
    this.service.updateNote(obj.value.id,obj.value)
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

  }



  createArchives(obj) {
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

  // creatArchive(obj) {
  //   this.http.post(this.archiveurl,obj).subscribe((res) => {
  //     this.onDelet(obj);
  //     // this.refresh();
  //     console.log(obj + "archive from card icon");
  //     console.log(obj);

  //   });
  // }

  createArchiv(obj) {

    this.service.createArchives(obj)
    this.delet(obj.id)

  }
  delet(obj) {
    this.service.deleteNote(obj);

  }
  // creatArchiv(obj) {
  //   this.http.post(this.archiveurl,obj.value).subscribe((res) => {
  //     this.arch.push(obj.value);
  //     console.log(obj + "hi");
  //     this.onDelet(obj);
  //     obj.reset();
  //   });
  // }

  // onDelet(obj) {
  //   this.http.delete(this.hurl + "/" + obj.id).subscribe((res) => {
  //     this.index = this.data.indexOf(obj);
  //     console.log(this.index);
  //     this.data.splice(this.index,1);

  //   });
  // }



  ar = ['white',
    '#f28b82','#fbbc04','#fff475',
    '#ccff90','#a7ffeb','#cbf0f8','#aecbfa',
    '#d7aefb','#fdcfe8','#e6c9a8','#e8eaed']

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

  rema: any;
  remainde(hi) {
    console.log(hi);
    this.rema = hi;
  }

  takerema: any;
  takera() {
    this.takerema = true
  }


  changenote(obj) {
    this.colors = obj
    console.log(obj);

  }

  colopaletnote: any = null;
  colorpaletnote() {
    this.colopaletnote = true
  }

  colorpaletnotehi() {
    this.colopaletnote = false

  }
  colorpale() {
    this.colopalet = null
  }




  changecolo(colo,idfrompage,obj) {
    this.colorid = idfrompage
    this.color = colo
    obj.color = colo
    this.id = idfrompage
    this.index = this.data.indexOf(obj)
    this.modicol(obj,colo,this.index)
    //this.service.updateNote(idfrompage,obj)
  }


  modicol(obj,colo,index) {
    obj.colors = colo
    this.service.updateNote(obj.id,obj)
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
    this.service.updateNote(obj.id,obj)
    this.mainder = null
    this.paint = null
    this.date = null
    this.time = null
    this.rept = ''



  }





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


  openSnackBar(message,action) {
    let snak = this.snackbar.open(message,action,{
      duration: 5000,
    });
    snak.afterDismissed().subscribe(() => {
      console.log('deleted file from here and saved in archives');

    })


  }

  openSnackBarrestor(message,action,obj) {
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

}

