import {Component, OnInit} from "@angular/core";
import {AppService} from "~/app/services/app.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SelectedIndexChangedEventData} from "tns-core-modules/ui/tab-view";
import {Menu} from "~/app/classes/menu";
import {RouterExtensions} from "nativescript-angular";
import {FindService} from "~/app/services/find.service";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
/*    styles: [`
        TabView {font-size: 25px; android-selected-tab-highlight-color: none;}
        TabView.selected {android-selected-tab-highlight-color: red;}
        `]*/
})
export class AppComponent implements OnInit{

    private menu: Menu;



    constructor(private as: AppService) {

        this.menu = new Menu();
        this.as.categories = this.menu.create();
    }


    ngOnInit(): void {

    }

}
