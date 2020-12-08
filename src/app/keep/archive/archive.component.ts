import {HttpClient} from '@angular/common/http';
import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AllService} from 'src/app/services/all.service';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  ngOnInit() {}


  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.urls = event.target.result;

        console.log(this.urls);
      };
    }
  }
  title: any = null;

  id: any;
  note: any = null;
  data: any;
  remainder: any = "9/09/2020";
  index;
  paint: any = null;
  urls: any = null;
  tras: any;
  page: any = 'note';
  hurl = "http://localhost:3000/data";
  remurl = "http://localhost:3000/remainder"
  archiveurl = "http://localhost:3000/archives"
  trash = "http://localhost:3000/trashes"

  loading = false


  constructor(private http: HttpClient,private router: Router,private snackbar: MatSnackBar,public service: AllService) {
    this.loading = true

    this.service.getArchives().subscribe((res) => {
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

  deley(record_id) {
    let id = record_id.id
    this.service.deleteArchives(id);
    this.service.createTrash(record_id)
  }

  createTrash(obj) {
    this.service.createTrash(obj)
  }

  createNote(obj) {
    this.service.createNote(obj)

  }
  createRemainder(obj) {
    this.service.createRemainder(obj)

  }
  unarchive(obj) {
    this.createTrash(obj)
    if (obj.page == 'rem') {
      console.log('j');

      this.createRemainder(obj)
      this.dele(obj)
    }
    else {
      console.log('jk');
      this.createNote(obj)
      this.dele(obj)
    }
  }
  dele(obj) {
    this.service.deleteArchives(obj.id);
    console.log('hi');
  }

  onDelete(obj) {
    this.http.delete(this.archiveurl + "/" + obj.id).subscribe((res) => {
      console.log(obj);
      this.index = this.data.indexOf(obj);
      this.data.splice(this.index,1);
      this.creatTrash(obj);
      // this.refresh();
    });
  }
  creatTrash(obj) {
    console.log(obj);
    this.http.post(this.trash,obj).subscribe((res) => {
      this.tras.push(obj);
      console.log(obj);
      console.log(this.tras);

    });
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


  changecolo(colo,idfrompage,obj) {
    this.colorid = idfrompage
    this.color = colo
    this.id = idfrompage
    this.index = this.data.indexOf(obj)
    this.modicol(obj,colo,this.index)

  }


  modicol(obj,colo,index) {
    obj.colors = colo
    this.service.updateArchive(obj.id,obj)
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
