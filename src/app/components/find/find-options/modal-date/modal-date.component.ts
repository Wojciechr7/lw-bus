import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "tns-core-modules/ui/page";
import {FindService} from "~/app/services/find.service";

@Component({
    moduleId: module.id,
    templateUrl: "./modal-date-view.component.html",
    styleUrls: ["./modal-date-view.component.css"]
})
export class ModalDateComponent implements OnInit {

    public cityIcon: string;
    pickedDate: Date;

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
        this.pickedDate = new Date();
    }

    onClose(accept): void {
        if (accept) {
            this._params.closeCallback(this.pickedDate);
        } else {
            this._params.closeCallback(false);
        }

    }

    onDateChanged(date) {
        this.pickedDate = date;
    }
}
