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
    this.c = 1;
    this.i = 1;
    this.t = 1;
  }

  getJuross() {
    let conta: number = this.c * this.i * this.c;
    return conta;
  }

  getJuros() {
    let list: number[] = []
  }

  ngOnInit() {}
}
