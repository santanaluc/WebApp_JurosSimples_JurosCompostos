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

  getJuros() {
    if (this.c >= 0 && this.i >= 0) {
      if (this.t >= 0) {
        let montante: number = this.c * Math.pow(1 + this.i / 100, this.t);
        let juros: number = montante - this.c;
        return juros.toFixed(2);
      }
    }
  }

  acumular() {}

  ngOnInit() {}
}
