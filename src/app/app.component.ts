import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Lucas S. Santana da Silva";
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
}
