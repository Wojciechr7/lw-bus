import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {AppService} from "~/app/services/app.service";
import {Menu} from "~/app/classes/menu";
import {RouterExtensions} from "nativescript-angular";


@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {



  constructor(private routerExtension: RouterExtensions,
              public as: AppService) {

  }

  public navigate(r: string) {
    if (r === '/find') {
      this.as.TabSelectedIndex = 1;
    } else {
      this.routerExtension.navigate([r]);
    }
  }


  ngOnInit() {

  }

}
