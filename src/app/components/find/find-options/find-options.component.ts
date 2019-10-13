import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogOptions, ModalDialogService, RouterExtensions} from "nativescript-angular";
import {ActivatedRoute} from "@angular/router";
import {AppService} from "~/app/services/app.service";
import {IDestination} from "~/app/interfaces/destination.interface";
import {ModalRootComponent} from "~/app/components/find/find-options/modal/modal-root.component";
import * as dialogs from "tns-core-modules/ui/dialogs";
import {FindService} from "~/app/services/find.service";
import {IDeparture} from "~/app/interfaces/departure.interface";
import {IPassage} from "~/app/interfaces/passage.interface";
import {ModalDateRootComponent} from "~/app/components/find/find-options/modal-date/modal-date-root.component";

@Component({
    selector: 'ns-find-options',
    templateUrl: './find-options.component.html',
    styleUrls: ['./find-options.component.css'],
    moduleId: module.id,
})
export class FindOptionsComponent implements OnInit {

    public exchangeIcon: string;
    fullDay = false;
    currentDate = new Date();
    switchEnabled = true;
    switchChecked = false;


    constructor(private routerExtension: RouterExtensions,
                private activeRoute: ActivatedRoute,
                public as: AppService,
                public fs: FindService,
                private _modalService: ModalDialogService,
                private _vcRef: ViewContainerRef) {
        this.exchangeIcon = String.fromCharCode(0xf079);

    }

    pickDate() {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: {
                currentDate: this.currentDate
            },
            fullscreen: true
        };
        this._modalService.showModal(ModalDateRootComponent, options)
            .then((result) => {
                if (result) {
                    this.currentDate = result;
                    const day = result.getDate();
                    const month = result.getMonth();
                    const current = new Date();
                    if (day === current.getDate() && month === current.getMonth()) {
                        this.switchChecked = false;
                        this.switchEnabled = true;
                        this.fullDay = false;
                    } else {
                        this.switchChecked = true;
                        this.switchEnabled = false;
                        this.fullDay = true;
                    }
                }
            });
    }

    public chooseDestination(dest: string): void {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: {},
            fullscreen: true
        };

        this._modalService.showModal(ModalRootComponent, options)
            .then((result) => {
                if (result) {
                    const other = dest === 'from' ? 'to' : 'from';
                    if (this.fs.destinations[other] !== result) {
                        this.fs.destinations[dest] = result;
                    } else {
                        dialogs.alert("Wybrano nieprawidłową lokalizację!");
                    }
                }
            });
    }

    switchFullDay(value) {
        this.fullDay = value;
    }

    public switchDestinations() {
        [this.fs.destinations.from, this.fs.destinations.to] = [this.fs.destinations.to, this.fs.destinations.from];
    }

    public search() {
        if (!this.fs.destinations.from.name || !this.fs.destinations.to.name) {
            dialogs.alert("Najpierw uzupełnij lokalizację!").then(() => {
            });
        } else {
            const currentDate = new Date();
            const data = {
                from: this.fs.destinations.from.id,
                to: this.fs.destinations.to.id,
                hour: this.fullDay ? '00:00' : `${currentDate.getHours()}:${currentDate.getMinutes()}`,
                date: `${this.currentDate.getDate()}-${this.currentDate.getMonth() + 1}`
            };
            this.fs.getPassages(data).subscribe((passages: Array<any>) => {
                if (!passages.length) {
                    dialogs.alert("Nie znaleziono żadnych połączeń").then(() => {
                    });
                } else {
                    this.fs.foundPassages = passages.map(p => {
                        return {
                            id: p.id,
                            company: p.company.name,
                            price: p.price,
                            route: p.departures.map(d => {
                                const dTime = new Date();
                                dTime.setHours(d.hours);
                                dTime.setMinutes(d.minutes);
                                return {
                                    name: d.name,
                                    time: dTime,
                                    passage_id: d.passage_id
                                }
                            })
                        }
                    });
                    this.fs.foundPassages = this.sortPassages(this.fs.foundPassages);
                    this.updateDifferenceTimes();
                    this.fs.FindPage = 'result';
                }
            });
        }
    }

    ngOnInit() {
    }

    private sortPassages(passages: Array<IPassage>) {
        return passages.map(p => {
            return p.route.find(d => d.name === this.fs.destinations.from.name);
        })
            .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()).map(sorted => {
                return passages.find(pas => pas.id === sorted.passage_id);
            });
    }

    private updateDifferenceTimes() {
        this.fs.foundPassages.map((p, index) => {
            const departureTime = new Date(p.route.find(d => d.name === this.fs.destinations.from.name).time);
            departureTime.setDate(departureTime.getDate());
            departureTime.setMonth(departureTime.getMonth());
            const differenceSeconds = (departureTime.getTime() - new Date().getTime()) / 1000;
            if (differenceSeconds < 0) {
                this.fs.foundPassages[index]['departureTime'] = '';
            } else {
                this.fs.foundPassages[index]['departureTime'] = `${Math.floor(differenceSeconds / 3600)}h ${Math.floor(differenceSeconds % 3600 / 60)}min`;
            }
        });
    }

}
