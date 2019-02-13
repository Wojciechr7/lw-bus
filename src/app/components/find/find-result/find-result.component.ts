import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {AppService} from "~/app/services/app.service";
import {FindService} from "~/app/services/find.service";
import {ModalDialogOptions, ModalDialogService} from "nativescript-angular";
import {ModalRootComponent} from "~/app/components/find/find-options/modal/modal-root.component";
import * as dialogs from "tns-core-modules/ui/dialogs";
import {ModalDescComponent} from "~/app/components/find/find-result/modal/modal-root.component";
import {IPassage} from "~/app/interfaces/passage.interface";

@Component({
    selector: 'ns-find-result',
    templateUrl: './find-result.component.html',
    styleUrls: ['./find-result.component.css'],
    moduleId: module.id,
})
export class FindResultComponent implements OnInit {

    constructor(public as: AppService,
                public fs: FindService,
                private _modalService: ModalDialogService,
                private _vcRef: ViewContainerRef) {
    }



    public expand(passage: IPassage) {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: passage,
            fullscreen: true
        };

        this._modalService.showModal(ModalDescComponent, options)
            .then((result: string) => {


            });
    }

    ngOnInit() {
    }


}
