import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogOptions, ModalDialogService, RouterExtensions} from "nativescript-angular";
import {ActivatedRoute} from "@angular/router";
import {AppService} from "~/app/services/app.service";
import {IDestination} from "~/app/interfaces/destination.interface";
import {ModalRootComponent} from "~/app/components/find/find-options/modal/modal-root.component";
import * as dialogs from "tns-core-modules/ui/dialogs";
import {FindService} from "~/app/services/find.service";

@Component({
  selector: 'ns-find-options',
  templateUrl: './find-options.component.html',
  styleUrls: ['./find-options.component.css'],
  moduleId: module.id,
})
export class FindOptionsComponent implements OnInit {

  public exchangeIcon: string;


  constructor(private routerExtension: RouterExtensions,
              private activeRoute: ActivatedRoute,
              public as: AppService,
              public fs: FindService,
              private _modalService: ModalDialogService,
              private _vcRef: ViewContainerRef) {
    this.exchangeIcon = String.fromCharCode(0xf079);

  }

  public chooseDestination(dest: string): void {
    const options: ModalDialogOptions = {
      viewContainerRef: this._vcRef,
      context: {},
      fullscreen: true
    };

    this._modalService.showModal(ModalRootComponent, options)
        .then((result: string) => {
          const other = dest === 'from' ? 'to' : 'from';
          if (this.fs.destinations[other] !== result) {
            this.fs.destinations[dest] = result;
          } else {
            dialogs.alert("Wybrano nieprawidłową lokalizację!");
          }

        });
  }

  public switchDestinations() {
    [this.fs.destinations.from, this.fs.destinations.to] = [this.fs.destinations.to, this.fs.destinations.from];
  }

  public search() {
    if (this.fs.destinations.from === '' || this.fs.destinations.to === '') {
      dialogs.alert("Najpierw uzupełnij lokalizację!").then(()=> {
      });
    } else {
      this.fs.FindPage = 'result';
    }

  }



  ngOnInit() {
  }

}
