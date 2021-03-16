import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";

@Component({
  selector: "app-sobre",
  templateUrl: "./sobre.component.html",
  styleUrls: ["./sobre.component.css"]
})
export class SobreComponent implements OnInit {
  [x: string]: any;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  goToGit(): void {
    this.document.location.href = "https://github.com/santanaluc";
  }
  ngOnInit() {}
}
