import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: "./modal-root.component.html"
})
export class ModalRootComponent implements OnInit {
    constructor(
        private _routerExtensions: RouterExtensions,
        private _activeRoute: ActivatedRoute,
        private router: Router
        ) {}

    ngOnInit(): void {
        this._routerExtensions.navigate([
            {
                outlets: { modalx: ['modal-view'] }
            }
        ], {relativeTo: this._activeRoute});
    }
}
