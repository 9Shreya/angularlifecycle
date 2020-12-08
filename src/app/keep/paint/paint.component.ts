import {ActivatedRoute,ParamMap} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {
  Component,
  OnInit,
  Input,
  ElementRef,
  AfterViewInit,
  ViewChild,
} from "@angular/core";
import {fromEvent} from "rxjs";
import {switchMap,takeUntil,pairwise} from "rxjs/operators";
import {AllService} from 'src/app/services/all.service';
import p5 from 'p5';
import * as $ from 'jquery';

declare var $: any;
@Component({
  selector: "app-paint",
  templateUrl: "./paint.component.html",
  styleUrls: ["./paint.component.css"],
})



export class PaintComponent implements OnInit,AfterViewInit {
  page: any = 'note';
  title: any = null;
  id: any = Math.round(Math.random() * 1000000000);
  note: any = null;
  colors: any = 'white';
  inde: any = null;
  paint: any = null;
  urls: any = null;
  name: any = null;
  date: any = null;
  time: any = null;
  repeat: any = null;
  canvas23: any;
  sw = 2;
  c: any = [];
  strokeColor = 0;
  data: any;


  onCreat(obj) {
    this.service.createNote(obj.value)
  }

  draw(id,paint,title,note,urls,colors,date,time,repeat,page) {
    const canvas = <HTMLCanvasElement>document.getElementById("thecanvas");
    const can = canvas.toDataURL();
    this.paint = can
    console.log(can);
    console.log(id);
  }
  onmodify(obj) {

    if (obj.value.page == 'rem') {
      console.log('j');
      obj.value.urls = this.urls
      obj.value.paint = this.paint
      obj.value.page = 'rem'
      console.log(obj.value.paint);

      this.service.updateRemainder(obj.value.id,obj.value)

    }
    else {
      console.log('jk');
      obj.value.urls = this.urls
      obj.value.paint = this.paint
      obj.value.page = 'note'
      console.log(obj.value.paint);
      this.service.updateNote(obj.value.id,obj.value)
      console.log('jk');
    }



  }


  ar = ['white',
    '#f28b82','#fbbc04','#fff475',
    '#ccff90','#a7ffeb','#cbf0f8','#aecbfa',
    '#d7aefb','#fdcfe8','#e6c9a8','#e8eaed']
  arpen = ['black','navajowhite',
    'firebrick','blanchedalmond','blue','green',
    'aqua','khaki','navy',
    'orange','orchid','cadetblue']
  idpINT = 'blue';

  changenote(obj) {
    this.colors = obj
    console.log(obj);
  }

  colopaletnote: any = null;
  colorpaletnote() {
    this.colopaletnote = true
  }

  paintcolor(color) {
    this.idpINT = color
    console.log(color);
    this.ngAfterViewInit()

  }

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

  constructor(private http: HttpClient,private route: ActivatedRoute,private service: AllService) {

  }


  dt: any = null;
  tm: any = null;
  rp: any = null;



  @ViewChild("canvas") public canvas: ElementRef;

  @Input() public width = 600;
  @Input() public height = 600;

  private cx: CanvasRenderingContext2D;

  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext("2d");

    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = "round";
    this.cx.strokeStyle = this.idpINT;
    console.log(this.idpINT);

    this.captureEvents(canvasEl);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    fromEvent(canvasEl,"mousedown")
      .pipe(
        switchMap((e) => {
          return fromEvent(canvasEl,"mousemove").pipe(
            takeUntil(fromEvent(canvasEl,"mouseup")),
            takeUntil(fromEvent(canvasEl,"mouseleave")),
            pairwise() /* Return the previous and last values as array */
          );
        })
      )
      .subscribe((res: [MouseEvent,MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();

        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top,
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top,
        };

        this.drawOnCanvas(prevPos,currentPos);

      });
  }

  private drawOnCanvas(
    prevPos: {x: number; y: number},
    currentPos: {x: number; y: number}
  ) {
    if (!this.cx) {
      return;
    }

    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x,prevPos.y); // from
      this.cx.lineTo(currentPos.x,currentPos.y);
      this.cx.stroke();
    }
  }













  sketch: any




  ngOnInit() {
    let obj = this.route.snapshot.paramMap

    this.id = obj.get('id');
    this.title = obj.get('title');
    this.note = obj.get('note');
    this.paint = obj.get('paint');
    this.date = obj.get('date');
    this.time = obj.get('time');
    this.repeat = obj.get('repeat');
    this.urls = obj.get('urls');
    this.colors = obj.get('colors');
    this.page = obj.get('page');
    console.log(this.id,this.title);

  }



}
