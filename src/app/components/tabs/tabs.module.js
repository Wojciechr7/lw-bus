"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var common_1 = require("nativescript-angular/common");
var tabs_component_1 = require("./tabs.component");
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forChild([
                    {
                        path: "default", component: tabs_component_1.TabsComponent, children: [
                            {
                                path: "home",
                                outlet: "homeTab",
                                component: router_1.NSEmptyOutletComponent,
                                loadChildren: "~/app/components/home/home.module#HomeModule",
                            },
                            {
                                path: "find",
                                outlet: "findTab",
                                component: router_1.NSEmptyOutletComponent,
                                loadChildren: "~/app/components/find/find.module#FindModule"
                            }
                        ]
                    }
                ])
            ],
            declarations: [
                tabs_component_1.TabsComponent
            ],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], TabsModule);
    return TabsModule;
}());
exports.TabsModule = TabsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBK0Y7QUFDL0Ysc0RBQXVFO0FBRXZFLG1EQUFpRDtBQWdDakQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQTlCdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxRQUFRLENBQUM7b0JBQzlCO3dCQUNJLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsUUFBUSxFQUFFOzRCQUNqRDtnQ0FDSSxJQUFJLEVBQUUsTUFBTTtnQ0FDWixNQUFNLEVBQUUsU0FBUztnQ0FDakIsU0FBUyxFQUFFLCtCQUFzQjtnQ0FDakMsWUFBWSxFQUFFLDhDQUE4Qzs2QkFDL0Q7NEJBQ0Q7Z0NBQ0ksSUFBSSxFQUFFLE1BQU07Z0NBQ1osTUFBTSxFQUFFLFNBQVM7Z0NBQ2pCLFNBQVMsRUFBRSwrQkFBc0I7Z0NBQ2pDLFlBQVksRUFBRSw4Q0FBOEM7NkJBQy9EO3lCQUNKO3FCQUNKO2lCQUNKLENBQUM7YUFDTDtZQUNELFlBQVksRUFBRTtnQkFDViw4QkFBYTthQUNoQjtZQUNELFNBQVMsRUFBRSxFQUNWO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCBOU0VtcHR5T3V0bGV0Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBcImRlZmF1bHRcIiwgY29tcG9uZW50OiBUYWJzQ29tcG9uZW50LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCJob21lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxldDogXCJob21lVGFiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTlNFbXB0eU91dGxldENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiZmluZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsZXQ6IFwiZmluZFRhYlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IE5TRW1wdHlPdXRsZXRDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9jb21wb25lbnRzL2ZpbmQvZmluZC5tb2R1bGUjRmluZE1vZHVsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSlcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBUYWJzQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzTW9kdWxlIHsgfVxyXG4iXX0=