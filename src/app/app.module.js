"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./components/app.component");
var fleet_component_1 = require("./components/fleet/fleet.component");
var trace_1 = require("tns-core-modules/trace");
var router_1 = require("nativescript-angular/router");
trace_1.enable();
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_1 = require("nativescript-angular/forms");
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var MyErrorHandler = /** @class */ (function () {
    function MyErrorHandler() {
    }
    MyErrorHandler.prototype.handleError = function (error) {
        console.log("### ErrorHandler Error: " + error.toString());
        console.log("### ErrorHandler Stack: " + error.stack);
    };
    return MyErrorHandler;
}());
exports.MyErrorHandler = MyErrorHandler;
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                fleet_component_1.FleetComponent
            ],
            providers: [
                { provide: core_1.ErrorHandler, useClass: MyErrorHandler },
                { provide: core_1.NgModuleFactoryLoader, useClass: router_1.NSModuleFactoryLoader }
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCw0REFBMEQ7QUFHMUQsc0VBQW9FO0FBQ3BFLGdEQUE4RTtBQUM5RSxzREFBb0U7QUFHcEUsY0FBVyxFQUFFLENBQUM7QUFFZCwyRUFBMkU7QUFDM0Usb0RBQXFFO0FBRXJFLGtGQUFrRjtBQUNsRixtRkFBbUY7QUFFbkY7SUFBQTtJQUtBLENBQUM7SUFKRyxvQ0FBVyxHQUFYLFVBQVksS0FBSztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFMWSx3Q0FBYztBQStCM0I7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBeEJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsK0JBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2FBQ2pCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLEVBQUUsT0FBTyxFQUFFLG1CQUFZLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtnQkFDbkQsRUFBRSxPQUFPLEVBQUUsNEJBQXFCLEVBQUUsUUFBUSxFQUFFLDhCQUFxQixFQUFFO2FBQ3RFO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BLCBFcnJvckhhbmRsZXIsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaW5kQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpbmQvZmluZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmxlZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmxlZXQvZmxlZXQuY29tcG9uZW50JztcbmltcG9ydCB7IGVuYWJsZSBhcyB0cmFjZUVuYWJsZSwgYWRkQ2F0ZWdvcmllcyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RyYWNlXCI7XG5pbXBvcnQgeyBOU01vZHVsZUZhY3RvcnlMb2FkZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1RhYnNDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9jb21wb25lbnRzL3RhYnMvdGFicy5jb21wb25lbnRcIjtcblxudHJhY2VFbmFibGUoKTtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBNeUVycm9ySGFuZGxlciBpbXBsZW1lbnRzIEVycm9ySGFuZGxlciB7XG4gICAgaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMgRXJyb3JIYW5kbGVyIEVycm9yOiBcIiArIGVycm9yLnRvU3RyaW5nKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyBFcnJvckhhbmRsZXIgU3RhY2s6IFwiICsgZXJyb3Iuc3RhY2spO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEZsZWV0Q29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBFcnJvckhhbmRsZXIsIHVzZUNsYXNzOiBNeUVycm9ySGFuZGxlciB9LFxuICAgICAgICB7IHByb3ZpZGU6IE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgdXNlQ2xhc3M6IE5TTW9kdWxlRmFjdG9yeUxvYWRlciB9XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19