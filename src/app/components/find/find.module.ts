import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import {FindComponent} from "~/app/components/find/find.component";
import {ModalViewActionBarComponent} from "~/app/components/find/find-options/modal/modal-view-action-bar.component";
import { FindResultComponent } from './find-result/find-result.component';
import { FindOptionsComponent } from './find-options/find-options.component';
import {ModalViewDescComponent} from "~/app/components/find/find-result/modal/modal-view-desc.component";
import {ModalDescComponent} from "~/app/components/find/find-result/modal/modal-desc.component";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ModalRootComponent} from "./find-options/modal/modal-root.component";
import {ModalDateRootComponent} from "~/app/components/find/find-options/modal-date/modal-date-root.component";
import {ModalDateComponent} from "~/app/components/find/find-options/modal-date/modal-date.component";

@NgModule({
    imports: [
        NativeScriptHttpClientModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "find" },
            { path: "find", component: FindComponent, data: { title: "Main page" },
                children: [
                    {
                        path: "modal-view", outlet: 'modalx', component: ModalViewActionBarComponent
                    },
                    {
                        path: "modal-desc", outlet: 'modaly', component: ModalViewDescComponent
                    },
                    {
                        path: "modal-date", outlet: 'modaldate', component: ModalDateComponent
            }
                ] },

        ])
    ],
    declarations: [
        FindComponent,
        ModalViewActionBarComponent,
        ModalRootComponent,
        FindResultComponent,
        FindOptionsComponent,
        ModalDescComponent,
        ModalViewDescComponent,
        ModalDateRootComponent,
        ModalDateComponent
    ],
    entryComponents: [ModalRootComponent, ModalDescComponent, ModalDateRootComponent, ModalDateComponent],
    providers: [

    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class FindModule { }
