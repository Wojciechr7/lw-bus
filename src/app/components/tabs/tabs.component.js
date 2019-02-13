"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var app_service_1 = require("~/app/services/app.service");
var TabsComponent = /** @class */ (function () {
    function TabsComponent(routerExtension, activeRoute, as) {
        this.routerExtension = routerExtension;
        this.activeRoute = activeRoute;
        this.as = as;
        this.homeIcon = String.fromCharCode(0xf015);
    }
    TabsComponent.prototype.tabchange = function (e) {
        if (e.oldIndex !== -1) {
            this.as.TabSelectedIndex = e.newIndex;
        }
    };
    TabsComponent.prototype.ngOnInit = function () {
        this.routerExtension.navigate([{
                outlets: {
                    homeTab: ["home"],
                    findTab: ["find"]
                }
            }], { relativeTo: this.activeRoute });
    };
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'ns-tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            router_2.ActivatedRoute,
            app_service_1.AppService])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCxzREFBNkQ7QUFDN0QsMENBQStDO0FBQy9DLDBEQUFzRDtBQVV0RDtJQUtJLHVCQUFvQixlQUFpQyxFQUNqQyxXQUEyQixFQUM1QixFQUFjO1FBRmIsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUM1QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVoRCxDQUFDO0lBR00saUNBQVMsR0FBaEIsVUFBaUIsQ0FBZ0M7UUFDN0MsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFHRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxFQUFFO29CQUNMLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztvQkFDakIsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO2lCQUNwQjthQUNKLENBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBM0JRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3RCLENBQUM7eUNBTXVDLHlCQUFnQjtZQUNwQix1QkFBYztZQUN4Qix3QkFBVTtPQVB4QixhQUFhLENBNkJ6QjtJQUFELG9CQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBcHBTZXJ2aWNlfSBmcm9tIFwifi9hcHAvc2VydmljZXMvYXBwLnNlcnZpY2VcIjtcbmltcG9ydCB7U2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGF9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XG5pbXBvcnQge01lbnV9IGZyb20gXCJ+L2FwcC9jbGFzc2VzL21lbnVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy10YWJzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFicy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFicy5jb21wb25lbnQuY3NzJ10sXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgaG9tZUljb246IHN0cmluZztcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmVSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHVibGljIGFzOiBBcHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuaG9tZUljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjAxNSk7XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyB0YWJjaGFuZ2UoZTogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgaWYgKGUub2xkSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmFzLlRhYlNlbGVjdGVkSW5kZXggPSBlLm5ld0luZGV4O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoW3tcbiAgICAgICAgICAgIG91dGxldHM6IHtcbiAgICAgICAgICAgICAgICBob21lVGFiOiBbXCJob21lXCJdLFxuICAgICAgICAgICAgICAgIGZpbmRUYWI6IFtcImZpbmRcIl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0sIHtyZWxhdGl2ZVRvOiB0aGlzLmFjdGl2ZVJvdXRlfSk7XG4gICAgfVxuXG59XG4iXX0=