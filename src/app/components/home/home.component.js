"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("~/app/services/app.service");
var nativescript_angular_1 = require("nativescript-angular");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtension, as) {
        this.routerExtension = routerExtension;
        this.as = as;
    }
    HomeComponent.prototype.navigate = function (r) {
        if (r === '/find') {
            this.as.TabSelectedIndex = 1;
        }
        else {
            this.routerExtension.navigate([r]);
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'ns-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            moduleId: module.id,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            app_service_1.AppService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSwwREFBc0Q7QUFFdEQsNkRBQXNEO0FBVXREO0lBSUUsdUJBQW9CLGVBQWlDLEVBQ2xDLEVBQWM7UUFEYixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDbEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUVqQyxDQUFDO0lBRU0sZ0NBQVEsR0FBZixVQUFnQixDQUFTO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUdELGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBcEJVLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7eUNBS3FDLHVDQUFnQjtZQUM5Qix3QkFBVTtPQUx0QixhQUFhLENBc0J6QjtJQUFELG9CQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBwU2VydmljZX0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2FwcC5zZXJ2aWNlXCI7XG5pbXBvcnQge01lbnV9IGZyb20gXCJ+L2FwcC9jbGFzc2VzL21lbnVcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgcHVibGljIGFzOiBBcHBTZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZShyOiBzdHJpbmcpIHtcbiAgICBpZiAociA9PT0gJy9maW5kJykge1xuICAgICAgdGhpcy5hcy5UYWJTZWxlY3RlZEluZGV4ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoW3JdKTtcbiAgICB9XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxufVxuIl19