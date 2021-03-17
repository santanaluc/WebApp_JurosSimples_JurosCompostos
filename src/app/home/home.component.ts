import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  timestamp = new Date();

  getHour() {
    return this.timestamp.getHours();
  }

  isMorning() {
    return this.getHour() > 6 && this.getHour() <= 12;
  }
  isAfternoon() {
    return this.getHour() > 12 && this.getHour() <= 18;
  }
  isNight() {
    return this.getHour() > 18 && this.getHour() <= 24;
  }
  isDawn() {
    return this.getHour() <= 6;
  }

  ngOnInit() {}
}
