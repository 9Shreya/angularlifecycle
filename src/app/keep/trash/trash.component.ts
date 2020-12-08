import {HttpClient} from '@angular/common/http';
import {Component,OnInit} from "@angular/core";
import {MatSnackBar} from '@angular/material/snack-bar';
import {AllService} from 'src/app/services/all.service';



@Component({
  selector: "app-trash",
  templateUrl: "./trash.component.html",
  styleUrls: ["./trash.component.css"],
})
export class TrashComponent implements OnInit {


  ngOnInit() {

  }


  title: any = null;
  id: any = Math.round(Math.random() * 1000000000); note: any = null;
  data: any;
  date: any = null;
  time: any = null;
  repeat: any = null;
  mainder: any = null;
  index;
  paint: any;
  urls: any = null;
  colors: any = 'white'
  tras: any;
  arch: any;
  page: any = 'note';
  loading = false

  constructor(private http: HttpClient,private snackbar: MatSnackBar,public service: AllService) {
    this.loading = true

    this.service.getTrashes().subscribe((res) => {
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

  onDelete(obj) {
    this.service.deletetrash(obj.id)
  }

  notDelete(obj) {
    this.service.deletetrash(obj.id)
    if (obj.page == 'rem') {
      this.onCreat(obj);
    }
    else {
      this.onCreatnote(obj);
    }
  }
  onCreat(obj) {
    this.service.createRemainder(obj)
  }

  onCreatnote(obj) {
    this.service.createNote(obj)

  }



  ar = ['white',
    '#f28b82','#fbbc04','#fff475',
    '#ccff90','#a7ffeb','#cbf0f8','#aecbfa',
    '#d7aefb','#fdcfe8','#e6c9a8','#e8eaed']


  hi: any;

  colopalet: any = null;
  colorpalet(d) {
    this.colopalet = d
  }
  colorid: any;
  color: any;


  changecolo(colo,idfrompage,obj) {
    this.colorid = idfrompage
    this.color = colo
    this.id = idfrompage
    this.index = this.data.indexOf(obj)
    this.modicol(obj,colo,this.index)

  }


  modicol(obj,colo,index) {
    obj.colors = colo
    this.service.updatetrash(obj.id,obj)

  }


  openSnackBar(message,action,obj) {
    let snak = this.snackbar.open(message,action,{
      duration: 5000,
    });
    snak.afterDismissed().subscribe(() => {
      console.log('hi');

    })
    snak.onAction().subscribe(() => {
      this.onDelete(obj);
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
