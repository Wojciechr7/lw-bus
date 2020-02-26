import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {PreloadAllModules, Routes} from "@angular/router";
import {HomeComponent} from "~/app/components/home/home.component";
import {FindComponent} from "~/app/components/find/find.component";
import {FleetComponent} from "~/app/components/fleet/fleet.component";
import {TabsComponent} from "~/app/components/tabs/tabs.component";


const routes: Routes = [
    { path: "", redirectTo: "/tabs/default", pathMatch: "full" },
/*    { path: "home", component: HomeComponent },
    { path: "find", component: FindComponent },
    { path: "fleet", component: FleetComponent },*/
/*    { path: "fleet", component: FleetComponent},*/
    {
        path: "tabs",
        loadChildren: "~/app/components/tabs/tabs.module#TabsModule"
    }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes,
        {preloadingStrategy: PreloadAllModules})],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
