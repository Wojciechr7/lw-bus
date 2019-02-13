import { Injectable } from '@angular/core';
import {IDestination} from "~/app/interfaces/destination.interface";
import {IPassage} from "~/app/interfaces/passage.interface";

@Injectable({
  providedIn: 'root'
})
export class FindService {

  // options, result
  private findPage: string;
  public destinations: IDestination;
  public foundPassagesMock: Array<IPassage>;

  constructor() {
    this.findPage = 'result';
    this.destinations = {
      from: 'Lidzbark Warmiński',
      to: 'Olsztyn'
    };
    this.foundPassagesMock = [
      {
        id: 1,
        company: 'Heniorek',
        stops: [
          {
            name: 'Lidzbark Warmiński',
            time: new Date("Fri, 26 Sep 2014 18:30:00 GMT+2")
          },
          {
            name: 'Kraszewo',
            time: new Date("Fri, 26 Sep 2014 18:35:00 GMT+2")
          },
          {
            name: 'Miłogórze',
            time: new Date("Fri, 26 Sep 2014 18:37:00 GMT+2")
          },
          {
            name: 'Smolajny',
            time: new Date("Fri, 26 Sep 2014 18:43:00 GMT+2")
          },
          {
            name: 'Kosyń',
            time: new Date("Fri, 26 Sep 2014 18:48:00 GMT+2")
          },
          {
            name: 'Dobre Miasto',
            time: new Date("Fri, 26 Sep 2014 19:00:00 GMT+2")
          },
          {
            name: 'Stary Dwór',
            time: new Date("Fri, 26 Sep 2014 19:07:00 GMT+2")
          },
          {
            name: 'Lugwałd',
            time: new Date("Fri, 26 Sep 2014 19:13:00 GMT+2")
          },
          {
            name: 'Dywity',
            time: new Date("Fri, 26 Sep 2014 19:23:00 GMT+2")
          },
          {
            name: 'Olsztyn',
            time: new Date("Fri, 26 Sep 2014 19:30:00 GMT+2")
          }
        ],
        price: 9
      },
      {
        id: 2,
        company: 'Bartczak',
        stops: [
          {
            name: 'Lidzbark Warmiński',
            time: new Date("Fri, 26 Sep 2014 18:30:00 GMT+2")
          },
          {
            name: 'Kraszewo',
            time: new Date("Fri, 26 Sep 2014 18:35:00 GMT+2")
          },
          {
            name: 'Miłogórze',
            time: new Date("Fri, 26 Sep 2014 18:37:00 GMT+2")
          },
          {
            name: 'Smolajny',
            time: new Date("Fri, 26 Sep 2014 18:43:00 GMT+2")
          },
          {
            name: 'Kosyń',
            time: new Date("Fri, 26 Sep 2014 18:48:00 GMT+2")
          },
          {
            name: 'Dobre Miasto',
            time: new Date("Fri, 26 Sep 2014 19:00:00 GMT+2")
          },
          {
            name: 'Stary Dwór',
            time: new Date("Fri, 26 Sep 2014 19:07:00 GMT+2")
          },
          {
            name: 'Lugwałd',
            time: new Date("Fri, 26 Sep 2014 19:13:00 GMT+2")
          },
          {
            name: 'Dywity',
            time: new Date("Fri, 26 Sep 2014 19:23:00 GMT+2")
          },
          {
            name: 'Olsztyn',
            time: new Date("Fri, 26 Sep 2014 19:30:00 GMT+2")
          }
        ],
        price: 9
      },
      {
        id: 3,
        company: 'Mobilis',
        stops: [
          {
            name: 'Lidzbark Warmiński',
            time: new Date("Fri, 26 Sep 2014 18:30:00 GMT+2")
          },
          {
            name: 'Kraszewo',
            time: new Date("Fri, 26 Sep 2014 18:35:00 GMT+2")
          },
          {
            name: 'Miłogórze',
            time: new Date("Fri, 26 Sep 2014 18:37:00 GMT+2")
          },
          {
            name: 'Smolajny',
            time: new Date("Fri, 26 Sep 2014 18:43:00 GMT+2")
          },
          {
            name: 'Kosyń',
            time: new Date("Fri, 26 Sep 2014 18:48:00 GMT+2")
          },
          {
            name: 'Dobre Miasto',
            time: new Date("Fri, 26 Sep 2014 19:00:00 GMT+2")
          },
          {
            name: 'Stary Dwór',
            time: new Date("Fri, 26 Sep 2014 19:07:00 GMT+2")
          },
          {
            name: 'Lugwałd',
            time: new Date("Fri, 26 Sep 2014 19:13:00 GMT+2")
          },
          {
            name: 'Dywity',
            time: new Date("Fri, 26 Sep 2014 19:23:00 GMT+2")
          },
          {
            name: 'Olsztyn',
            time: new Date("Fri, 26 Sep 2014 19:30:00 GMT+2")
          }
        ],
        price: 5
      }
    ];

  }


  get FindPage(): string {
    return this.findPage;
  }
  set FindPage(page: string) {
    this.findPage = page;
  }


}
