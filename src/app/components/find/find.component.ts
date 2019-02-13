import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalDialogOptions, ModalDialogService, RouterExtensions} from "nativescript-angular";
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "~/app/services/app.service";
import {ModalRootComponent} from "~/app/components/find/find-options/modal/modal-root.component";
import * as dialogs from "tns-core-modules/ui/dialogs";
import {IDestination} from "~/app/interfaces/destination.interface";
import {FindService} from "~/app/services/find.service";

@Component({
  selector: 'ns-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
  providers: [ModalDialogService],
  moduleId: module.id,
})
export class FindComponent implements OnInit {





  constructor(private routerExtension: RouterExtensions,
              private activeRoute: ActivatedRoute,
              public as: AppService,
              public fs: FindService,
              private _modalService: ModalDialogService,
              private _vcRef: ViewContainerRef) {


  }


  public navigate(): void {
    if (this.fs.FindPage === 'options') {
      this.as.TabSelectedIndex = 0;
    } else {
      this.fs.FindPage = 'options';
    }

  }


  public chooseLabel(): string {
    if (this.fs.FindPage === 'options') {
      return 'Wyszukaj';
    } else {
      return 'Dostępne Przejazdy';
    }
  }


  ngOnInit() {

  }

}
