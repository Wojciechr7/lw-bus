import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TabsComponent } from "./tabs.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            {
                path: "default", component: TabsComponent, children: [
                    {
                        path: "home",
                        outlet: "homeTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/components/home/home.module#HomeModule",
                    },
                    {
                        path: "find",
                        outlet: "findTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/components/find/find.module#FindModule"
                    }
                ]
            }
        ])
    ],
    declarations: [
        TabsComponent
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule { }
