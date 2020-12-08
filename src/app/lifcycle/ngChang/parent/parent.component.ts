import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  usertext: string = "par";
  parent: number = 10;
  namee: string = "umair";
  name: string;
  isVisible: boolean = true;

  destroy() {
    this.isVisible = !this.isVisible;
  }

  user = {
    name: "DoCheck only"
  }

  updated() {
    this.user.name = "Now see console only do check worked"
  }

  upadate() {
    this.namee = "shreya"
  }


  ngOnInit() {
    console.log("component has been initialized! from app component by ngOnInit")
  }
}
