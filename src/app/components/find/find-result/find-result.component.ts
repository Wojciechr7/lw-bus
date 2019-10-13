import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {AppService} from "~/app/services/app.service";
import {FindService} from "~/app/services/find.service";
import {ModalRootComponent} from "~/app/components/find/find-options/modal/modal-root.component";
import * as dialogs from "tns-core-modules/ui/dialogs";
import {ModalDescComponent} from "~/app/components/find/find-result/modal/modal-desc.component";
import {IPassage} from "~/app/interfaces/passage.interface";

import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";

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

    calculatePassageTime(stops) {
        const start = stops.find(stop => stop.name === this.fs.destinations.from.name);
        const end = stops.find(stop => stop.name === this.fs.destinations.to.name);
        let startFound = false;
        let endFound = false;
        const time = stops.map((stop, index) => {
            if (endFound) {
                return 0;
            }
            if (!stop.time) {
                return 0;
            }
            if (stop.name === start.name) {
                startFound = true;
                return 0;
            } else if (stop.name === end.name) {
                endFound = true;
            }
            if (!index) {
                return 0;
            }
            if (startFound) {
                const timeArr = [new Date(stop.time).getHours(), new Date(stop.time).getMinutes()];
                const minutes = timeArr[0] * 60 + timeArr[1];
                const prev = [new Date(stops[index - 1].time).getHours(), new Date(stops[index - 1].time).getMinutes()];
                const minutesPrev = prev[0] * 60 + prev[1];
                if (minutes < minutesPrev) {
                    return 1440 - minutesPrev + minutes;
                }
                return minutes - minutesPrev;
            } else {
                return 0;
            }
        }).reduce((prev, next) => prev + next);
        return `${Math.floor(time / 60)}h ${time % 60}min`;
    }

    findDepartureTime(name, passageIndex) {
        const departureTime = new Date(this.fs.foundPassages[passageIndex].route.find(d => d.name === name).time);
        const hours = departureTime.getHours() > 9 ? departureTime.getHours() : `0${departureTime.getHours()}`;
        const minutes = departureTime.getMinutes() > 9 ? departureTime.getMinutes() : `0${departureTime.getMinutes()}`;
        return `${hours}:${minutes}`;
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
