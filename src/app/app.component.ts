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
    const str = "{!product_type!:!Services!,!product_id!:23,!buyer_user_id!:2,!start_datetime!:!2020-07-31T06:30:00.000Z!,!amount!:150000,!ipaddress!:!!,!qruuid!:!f642f9600f4842dd9ff002b8ff80b839!,!tracking_url!:null,!meeting_url!:null,!duration!:180,!timestamp!:!2020-07-30T13:50:51.967Z!,!transaction_model!:!Sell!,!rent_end_date!:null,!rent_start_date!:null}"
    console.log(str.replace(/!/g, "\""))
    // console.log(new Date().toUTCString())
    // console.log(new Date("2020-03-25 15:00:00").toLocaleString("da-DK",{timeZone: "Asia/Kolkata"}))
    // Time and Days diffrence between two days
    // let endDate = new Date(new Date().toDateString() + " 17:00:00");
    // console.log(endDate.toLocaleTimeString());
    // const date1 = new Date("7/13/2020 12:00 AM");
    // const date2 = new Date("7/13/2020 4:30 AM");
    // const diffTime = Math.abs(date2.valueOf() - date1.valueOf());
    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // console.log(diffDays);
    // console.log(diffTime / (1000 * 60 * 60));

    // Dates between range
    // let startDate = new Date("09/10/2019");
    // let endDate = new Date("09/30/2019");
    // let arr = [];
    // while (startDate <= endDate) {
    //   console.log(startDate.getDate())
    //   arr.push(new Date(startDate));
    //   startDate.setDate(startDate.getDate() + 1);
    // }
    // console.log(arr);
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
