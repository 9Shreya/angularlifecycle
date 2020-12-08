import {HttpClient} from '@angular/common/http';
import {Component,OnInit} from "@angular/core";

@Component({
  selector: "app-keeps",
  templateUrl: "./keeps.component.html",
  styleUrls: ["./keeps.component.css"],
})
export class KeepsComponent implements OnInit {
  constructor(private http: HttpClient) {
    // this.http.get(this.remurl).subscribe((res) => {
    //   this.data = res;
    //   console.log(res);

    // });
  }

  ngOnInit(): void {}
  toggel() {
    if (document.getElementById("mySidenav").style.width == "250px") {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("sideicon").style.display = "block"
    } else {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";

    }
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

  }

  mouseHover(e) {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  mouseout(e) {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0";
  }

  refreshPage() {
    this.loading = true
    setTimeout(() => {
      document.getElementById("loading").style.display = "none"
      document.getElementById("takeanote").style.opacity = "1"
      this.loading = false
    },1500)
    document.getElementById("takeanote").style.opacity = ".5"
    document.getElementById("loading").style.display = "block"


  }

  remurl = "http://localhost:3000"
  data: any;
  edits: any = null;


  ar = ['white',
    '#f28b82','#e1e099','#696969',
    '#ee4540','#f1bbd5','#FCDAB7','#A9A9A9',
    '#d7aefb']


  onCreat(obj) {
    console.log(this.edits);

    console.log(obj.value);
    //  this.refresh();
    this.http.post(this.remurl,obj.value).subscribe((res) => {
      this.data.unshift(obj.value);
      console.log(obj);
      console.log(res);
      console.log(obj + "obj added in remainder");

      obj.reset();
    });
  }

  refresh() {
    location.reload();
  }

  themchange(color) {
    document.getElementById("theme").style.backgroundColor = color
    document.getElementById("mySidenav").style.backgroundColor = color

  }

  open() {
    document.getElementById("colo").style.display = "flex"
  }
  close() {
    document.getElementById("colo").style.display = "none"

  }
  loading = false
}
