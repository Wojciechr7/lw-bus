import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "tns-core-modules/ui/page";
import {FindService} from "~/app/services/find.service";

@Component({
    moduleId: module.id,
    templateUrl: "./modal-view.component.html",
    styleUrls: ["./modal-view.component.css"]
})
export class ModalViewActionBarComponent implements OnInit {

    public localisations: Array<string> = [];
    public cityIcon: string;


    constructor(
        private fs: FindService,
        private _params: ModalDialogParams,
        private _page: Page,
        private router: RouterExtensions,
        private _activeRoute: ActivatedRoute
    ) {
        this.cityIcon = String.fromCharCode(0xf64f);
    }

    ngOnInit(): void {
        /*this.fs.getStops().subscribe(stops => {
            this.localisations = stops.map(stop => {
                console.log(stop.name);
                return stop.name;
            });

        });*/
    }
    onClose(val): void {
        if (val === undefined) {
            this._params.closeCallback('');
        } else {
            this._params.closeCallback(val);
        }

    }
}
