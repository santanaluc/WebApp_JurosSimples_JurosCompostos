import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-jurosc",
  templateUrl: "./jurosc.component.html",
  styleUrls: ["./jurosc.component.css"]
})
export class JuroscComponent implements OnInit {
  c: number;
  i: number;
  t: number;

  constructor() {
    this.c;
    this.i;
    this.t;
  }

  getJurosList() {
    let list: string[] = [];

    for (let j = 1; j <= this.t; j++) {
      if (this.c >= 0 && this.i >= 0) {
        if (j >= 0) {
          let montante: number = this.c * Math.pow(1 + this.i / 100, j);
          let convert = montante.toFixed(2);
          list.push(convert);
        }
      }
    }
    return list;
  }

  ngOnInit() {}
}
