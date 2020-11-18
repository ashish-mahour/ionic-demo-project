import { Component, NgZone } from "@angular/core";
import moment from "moment";
// import jwt from 'jsonwebtoken';

enum TYPE {
  DATA = "Data1"
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
    console.log(Math.floor(222 / 60));
    console.log(222 % 60);
    const str =
      "{!product_type!:!Services!,!product_id!:23,!buyer_user_id!:2,!start_datetime!:!2020-07-31T06:30:00.000Z!,!amount!:150000,!ipaddress!:!!,!qruuid!:!f642f9600f4842dd9ff002b8ff80b839!,!tracking_url!:null,!meeting_url!:null,!duration!:180,!timestamp!:!2020-07-30T13:50:51.967Z!,!transaction_model!:!Sell!,!rent_end_date!:null,!rent_start_date!:null}";
    console.log(str.replace(/!/g, '"'));
    console.log(TYPE.DATA.toString());
    console.log("2000S&&".match(/[^0-9]/g));
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
    // this.test2();
    console.log(new Date(new Date("2020-11-10 06:30:00").toString() + "UTC"))
  }

  test() {
    const customers = [
      "Alpha",
      "Alpha",
      "Alpha",
      "Alpha",
      "Alpha",
      "Alpha",
      "Alpha",
      "Alpha",
      "Alpha",
      "Beta",
      "Omega"
    ];
    if (customers.length === 0) {
      return;
    }
    customers.sort();
    let cursor = customers[0];
    let temp = 1;
    let occurance = [];
    let result = [];
    for (let i = 1; i < customers.length; i++) {
      if (customers[i] === cursor) {
        if (i === customers.length - 1) {
          occurance.push({
            item: cursor,
            count: (temp / customers.length) * 100
          });
        } else {
          temp++;
        }
      } else {
        occurance.push({
          item: cursor,
          count: (temp / customers.length) * 100
        });
        cursor = customers[i];
        temp = 1;
        if (i === customers.length - 1) {
          occurance.push({
            item: cursor,
            count: (temp / customers.length) * 100
          });
        }
      }
    }
    occurance.forEach(x => {
      if (x.count >= 5) {
        result.push(x.item);
      }
    });
    console.log(result);
  }

  test2() {
    const s = "shjdjsdjadassn";
    const k = 6;
    let result = "Not found!";
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      const str = s.substr(i, k);
      if (str.length !== k) {
        continue;
      }
      const strLen = str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0;
      if (k === strLen) {
        count = strLen;
        result = str;
        break;
      } else if (count < strLen) {
        count = strLen;
        result = str;
      }
    }
    console.log(result);
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
