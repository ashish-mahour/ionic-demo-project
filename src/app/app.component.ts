import { Component, NgZone } from "@angular/core";
import moment from 'moment';
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
  timerValue: string = ""
  checked: boolean[] = [];

  constructor(private zone: NgZone) {
    // this.timerByLocale()
  }

  timerByLocale(){
    let startTime = new Date().valueOf() - (new Date().getTimezoneOffset().valueOf() * 60000)
    setInterval( () => {

    let date = moment.utc(+moment.duration(moment.utc().diff(startTime)))
      .toDate()
    this.timerValue = (date.toLocaleTimeString("en", {minute: 'numeric', second: "numeric"}))
    }, 1000)
  }

  changeToggle(index: number) {
    let prevValue = this.checked[index]
    this.checked = []
    this.checked[index] = !prevValue;
  }
}
