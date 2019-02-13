import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "tns-core-modules/ui/page";

@Component({
    moduleId: module.id,
    templateUrl: "./modal-view.component.html",
    styleUrls: ["./modal-view.component.css"]
})
export class ModalViewActionBarComponent implements OnInit {

    public localisations: Array<string> = [];
    public cityIcon: string;


    constructor(private _params: ModalDialogParams, private _page: Page, private router: RouterExtensions, private _activeRoute: ActivatedRoute) {
        this.localisations = ["Olsztyn", "Lidzbark Warmiński", "Dobre Miasto", "Smolajny", "Stary Dwór",
            "Miłogórze", "Bartoszyce", "Kraszewo"];
        this.cityIcon = String.fromCharCode(0xf64f);
    }

    ngOnInit(): void {}
    onClose(val: string): void {
        if (val === undefined) {
            this._params.closeCallback('');
        } else {
            this._params.closeCallback(val);
        }

    }
}
