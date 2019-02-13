import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import {FindComponent} from "~/app/components/find/find.component";
import {ModalViewActionBarComponent} from "~/app/components/find/find-options/modal/modal-view-action-bar.component";
import {ModalRootComponent} from "~/app/components/find/find-options/modal/modal-root.component";
import { FindResultComponent } from './find-result/find-result.component';
import { FindOptionsComponent } from './find-options/find-options.component';
import {ModalViewDescComponent} from "~/app/components/find/find-result/modal/modal-view-action-bar.component";
import {ModalDescComponent} from "~/app/components/find/find-result/modal/modal-root.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "find" },
            { path: "find", component: FindComponent, data: { title: "Main page" },
                children: [
                    {
                        path: "modal-view", component: ModalViewActionBarComponent
                    },
                    {
                        path: "modal-desc", component: ModalViewDescComponent
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
        ModalViewDescComponent
    ],
    entryComponents: [ModalRootComponent, ModalDescComponent],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class FindModule { }
