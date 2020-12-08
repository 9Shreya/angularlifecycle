import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-simplechange',
  templateUrl: './simplechange.component.html',
  styleUrls: ['./simplechange.component.css']
})
export class SimplechangeComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() simpleinput: string = " ";
  @Input() num: number;
  @Input() myName: string;
  @Input() doCheck: string;

  ngOnChanges(change: SimpleChanges) {
    //  debugger;
    console.log(change);//this gives us json data of previous and current value

    for (let property in change) {
      let current = change[property].currentValue;
      let previous = change[property].previousValue;
      console.log(`"${current}"-curentvalue      values are from array of objects      previousvalue- " ${previous}"`);
    }
  }

  changeFromChild() {
    this.num = 1500;
  }
  ngOnInit(): void {
    console.log("component has been initialized! from child simplechamge component")
  }

  ngDoCheck() {
    //  debugger;
    console.log(this.simpleinput, this.num, this.doCheck, this.myName + " DoCheck")
  }

  ngAfterContentInit() {
    console.log("When we want to execute any function,variable only once after initialisation we" +
      "use that content in ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("After ngDoCheck ngAfterContentChecked will be executed again and again at first it get executed after AfterContentInit" +
      "when we want to change anything after ngDoCheck() got executed it will be used");
  }
  ngAfterViewInit() {
    console.log("When we want to execute any function,variable only once after initialisation of grandchild component we" +
      "use that content in ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("After ngDoCheck ngAfterContentChecked ngAfterViewChecked will be executed again and again at first it get executed after ngAfterViewInit" +
      "when we want to change anything after ngAfterContentChecked() got executed it will be used and when we want to make calculation again and again");
  }
  ngOnDestroy() {
    console.log("when we want to destroy all the pages of that component get destroyed");

  }
}
