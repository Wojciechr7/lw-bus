import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "tns-core-modules/ui/page";
import {IPassage} from "~/app/interfaces/passage.interface";

@Component({
    moduleId: module.id,
    templateUrl: "./modal-view-desc.component.html",
    styleUrls: ["./modal-view-desc.component.css"]
})
export class ModalViewDescComponent implements OnInit {

    public cityIcon: string;
    public passage: IPassage;


    constructor(private _params: ModalDialogParams, private _page: Page, private router: RouterExtensions, private _activeRoute: ActivatedRoute) {
        this.cityIcon = String.fromCharCode(0xf64f);
        this.passage = _params.context;
    }

    ngOnInit(): void {

    }
    onClose(val: string): void {
        if (val === undefined) {
            this._params.closeCallback('');
        } else {
            this._params.closeCallback(val);
        }

    }
}
