import { Component, NgZone } from "@angular/core";
import moment from "moment";
// import jwt from 'jsonwebtoken';

enum TYPE {
  DATA = "DATA"
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = TYPE;
  timerValue: string = "";
  checked: boolean[] = [];

  constructor(private zone: NgZone) {
    let endDate = new Date(new Date().toDateString() + " 17:00:00");
    console.log(endDate.toLocaleTimeString());
    const date1 = new Date("7/13/2020 12:00 AM");
    const date2 = new Date("7/13/2020 4:30 AM");
    const diffTime = Math.abs(date2.valueOf() - date1.valueOf());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays);
    console.log(diffTime / (1000 * 60 * 60));

    let start = new Date("09/10/2019"),
    end = new Date("09/30/2019");
    let arr = []
    while(start <= end){
      arr.push(start)
      start.setDate(start.getDate() + 1)
    } 
    console.log(arr)
    // this.timerByLocale()
  }

  timerByLocale() {
    let startTime =
      new Date().valueOf() - new Date().getTimezoneOffset().valueOf() * 60000;
    setInterval(() => {
      let date = moment
        .utc(+moment.duration(moment.utc().diff(startTime)))
        .toDate();
      this.timerValue = date.toLocaleTimeString("en", {
        minute: "numeric",
        second: "numeric"
      });
    }, 1000);
  }

  changeToggle(index: number) {
    let prevValue = this.checked[index];
    this.checked = [];
    this.checked[index] = !prevValue;
  }
}
