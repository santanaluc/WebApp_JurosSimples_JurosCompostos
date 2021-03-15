import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-juross",
  templateUrl: "./juross.component.html",
  styleUrls: ["./juross.component.css"]
})
export class JurossComponent implements OnInit {
  c: number;
  i: number;
  t: number;

  constructor() {
    this.c;
    this.i;
    this.t;
  }

  getResultado() {
    if (this.c >= 0 && this.i >= 0) {
      if (this.t >= 0) {
        let juros: number = this.c * (this.i / 100) * this.t;
        let final: number = this.c + juros;
        let conversao = final.toFixed(2);
        return conversao;
      }
    }
  }

  ngOnInit() {}
}
