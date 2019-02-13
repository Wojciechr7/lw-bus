"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQVF2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ2hFOzt1REFFbUQ7SUFDbkQsb0RBQW9EO0lBQ2hEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixZQUFZLEVBQUUsOENBQThDO0tBQy9EO0NBRUosQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge0ZpbmRDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9jb21wb25lbnRzL2ZpbmQvZmluZC5jb21wb25lbnRcIjtcbmltcG9ydCB7RmxlZXRDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9jb21wb25lbnRzL2ZsZWV0L2ZsZWV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUYWJzQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvY29tcG9uZW50cy90YWJzL3RhYnMuY29tcG9uZW50XCI7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi90YWJzL2RlZmF1bHRcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuLyogICAgeyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImZpbmRcIiwgY29tcG9uZW50OiBGaW5kQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImZsZWV0XCIsIGNvbXBvbmVudDogRmxlZXRDb21wb25lbnQgfSwqL1xuLyogICAgeyBwYXRoOiBcImZsZWV0XCIsIGNvbXBvbmVudDogRmxlZXRDb21wb25lbnR9LCovXG4gICAge1xuICAgICAgICBwYXRoOiBcInRhYnNcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2NvbXBvbmVudHMvdGFicy90YWJzLm1vZHVsZSNUYWJzTW9kdWxlXCJcbiAgICB9XG5cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=