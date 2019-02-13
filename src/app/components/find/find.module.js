"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var common_1 = require("nativescript-angular/common");
var find_component_1 = require("~/app/components/find/find.component");
var modal_view_action_bar_component_1 = require("~/app/components/find/find-options/modal/modal-view-action-bar.component");
var modal_root_component_1 = require("~/app/components/find/find-options/modal/modal-root.component");
var find_result_component_1 = require("./find-result/find-result.component");
var find_options_component_1 = require("./find-options/find-options.component");
var modal_view_action_bar_component_2 = require("~/app/components/find/find-result/modal/modal-view-action-bar.component");
var modal_root_component_2 = require("~/app/components/find/find-result/modal/modal-root.component");
var FindModule = /** @class */ (function () {
    function FindModule() {
    }
    FindModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: "", redirectTo: "find" },
                    { path: "find", component: find_component_1.FindComponent, data: { title: "Main page" },
                        children: [
                            {
                                path: "modal-view", component: modal_view_action_bar_component_1.ModalViewActionBarComponent
                            },
                            {
                                path: "modal-desc", component: modal_view_action_bar_component_2.ModalViewDescComponent
                            }
                        ] },
                ])
            ],
            declarations: [
                find_component_1.FindComponent,
                modal_view_action_bar_component_1.ModalViewActionBarComponent,
                modal_root_component_1.ModalRootComponent,
                find_result_component_1.FindResultComponent,
                find_options_component_1.FindOptionsComponent,
                modal_root_component_2.ModalDescComponent,
                modal_view_action_bar_component_2.ModalViewDescComponent
            ],
            entryComponents: [modal_root_component_1.ModalRootComponent, modal_root_component_2.ModalDescComponent],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], FindModule);
    return FindModule;
}());
exports.FindModule = FindModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaW5kLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsc0RBQXVFO0FBQ3ZFLHVFQUFtRTtBQUNuRSw0SEFBcUg7QUFDckgsc0dBQWlHO0FBQ2pHLDZFQUEwRTtBQUMxRSxnRkFBNkU7QUFDN0UsMkhBQStHO0FBQy9HLHFHQUFnRztBQWtDaEc7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQWhDdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxRQUFRLENBQUM7b0JBQzlCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFO29CQUNoQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTt3QkFDbEUsUUFBUSxFQUFFOzRCQUNOO2dDQUNJLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDZEQUEyQjs2QkFDN0Q7NEJBQ0Q7Z0NBQ0ksSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsd0RBQXNCOzZCQUN4RDt5QkFDSixFQUFFO2lCQUVWLENBQUM7YUFDTDtZQUNELFlBQVksRUFBRTtnQkFDViw4QkFBYTtnQkFDYiw2REFBMkI7Z0JBQzNCLHlDQUFrQjtnQkFDbEIsMkNBQW1CO2dCQUNuQiw2Q0FBb0I7Z0JBQ3BCLHlDQUFrQjtnQkFDbEIsd0RBQXNCO2FBQ3pCO1lBQ0QsZUFBZSxFQUFFLENBQUMseUNBQWtCLEVBQUUseUNBQWtCLENBQUM7WUFDekQsU0FBUyxFQUFFLEVBQ1Y7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM5QixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtGaW5kQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvY29tcG9uZW50cy9maW5kL2ZpbmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TW9kYWxWaWV3QWN0aW9uQmFyQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvY29tcG9uZW50cy9maW5kL2ZpbmQtb3B0aW9ucy9tb2RhbC9tb2RhbC12aWV3LWFjdGlvbi1iYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TW9kYWxSb290Q29tcG9uZW50fSBmcm9tIFwifi9hcHAvY29tcG9uZW50cy9maW5kL2ZpbmQtb3B0aW9ucy9tb2RhbC9tb2RhbC1yb290LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGaW5kUmVzdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9maW5kLXJlc3VsdC9maW5kLXJlc3VsdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaW5kT3B0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vZmluZC1vcHRpb25zL2ZpbmQtb3B0aW9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQge01vZGFsVmlld0Rlc2NDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9jb21wb25lbnRzL2ZpbmQvZmluZC1yZXN1bHQvbW9kYWwvbW9kYWwtdmlldy1hY3Rpb24tYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge01vZGFsRGVzY0NvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2NvbXBvbmVudHMvZmluZC9maW5kLXJlc3VsdC9tb2RhbC9tb2RhbC1yb290LmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCJmaW5kXCIgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiBcImZpbmRcIiwgY29tcG9uZW50OiBGaW5kQ29tcG9uZW50LCBkYXRhOiB7IHRpdGxlOiBcIk1haW4gcGFnZVwiIH0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCJtb2RhbC12aWV3XCIsIGNvbXBvbmVudDogTW9kYWxWaWV3QWN0aW9uQmFyQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwibW9kYWwtZGVzY1wiLCBjb21wb25lbnQ6IE1vZGFsVmlld0Rlc2NDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdIH0sXHJcblxyXG4gICAgICAgIF0pXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgRmluZENvbXBvbmVudCxcclxuICAgICAgICBNb2RhbFZpZXdBY3Rpb25CYXJDb21wb25lbnQsXHJcbiAgICAgICAgTW9kYWxSb290Q29tcG9uZW50LFxyXG4gICAgICAgIEZpbmRSZXN1bHRDb21wb25lbnQsXHJcbiAgICAgICAgRmluZE9wdGlvbnNDb21wb25lbnQsXHJcbiAgICAgICAgTW9kYWxEZXNjQ29tcG9uZW50LFxyXG4gICAgICAgIE1vZGFsVmlld0Rlc2NDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtNb2RhbFJvb3RDb21wb25lbnQsIE1vZGFsRGVzY0NvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbmRNb2R1bGUgeyB9XHJcbiJdfQ==