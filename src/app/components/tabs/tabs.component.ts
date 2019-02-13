import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from "nativescript-angular/router";
import {ActivatedRoute} from "@angular/router";
import {AppService} from "~/app/services/app.service";
import {SelectedIndexChangedEventData} from "tns-core-modules/ui/tab-view";
import {Menu} from "~/app/classes/menu";

@Component({
    selector: 'ns-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css'],
    moduleId: module.id,
})
export class TabsComponent implements OnInit {

    public homeIcon: string;


    constructor(private routerExtension: RouterExtensions,
                private activeRoute: ActivatedRoute,
                public as: AppService) {
        this.homeIcon = String.fromCharCode(0xf015);

    }


    public tabchange(e: SelectedIndexChangedEventData) {
        if (e.oldIndex !== -1) {
            this.as.TabSelectedIndex = e.newIndex;
        }
    }


    ngOnInit() {
        this.routerExtension.navigate([{
            outlets: {
                homeTab: ["home"],
                findTab: ["find"]
            }
        }], {relativeTo: this.activeRoute});
    }

}
