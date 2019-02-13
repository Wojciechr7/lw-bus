import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import {HomeComponent} from "~/app/components/home/home.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "home" },
            { path: "home", component: HomeComponent }
        ])
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
