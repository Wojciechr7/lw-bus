"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("~/app/services/app.service");
var menu_1 = require("~/app/classes/menu");
var AppComponent = /** @class */ (function () {
    function AppComponent(as) {
        this.as = as;
        this.menu = new menu_1.Menu();
        this.as.categories = this.menu.create();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsMERBQXNEO0FBR3RELDJDQUF3QztBQWF4QztJQU1JLHNCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUU5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBR0QsK0JBQVEsR0FBUjtJQUVBLENBQUM7SUFmUSxZQUFZO1FBVHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtTQUt0QyxDQUFDO3lDQU8wQix3QkFBVTtPQU56QixZQUFZLENBaUJ4QjtJQUFELG1CQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBcHBTZXJ2aWNlfSBmcm9tIFwifi9hcHAvc2VydmljZXMvYXBwLnNlcnZpY2VcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcbmltcG9ydCB7TWVudX0gZnJvbSBcIn4vYXBwL2NsYXNzZXMvbWVudVwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7RmluZFNlcnZpY2V9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9maW5kLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiLFxuLyogICAgc3R5bGVzOiBbYFxuICAgICAgICBUYWJWaWV3IHtmb250LXNpemU6IDI1cHg7IGFuZHJvaWQtc2VsZWN0ZWQtdGFiLWhpZ2hsaWdodC1jb2xvcjogbm9uZTt9XG4gICAgICAgIFRhYlZpZXcuc2VsZWN0ZWQge2FuZHJvaWQtc2VsZWN0ZWQtdGFiLWhpZ2hsaWdodC1jb2xvcjogcmVkO31cbiAgICAgICAgYF0qL1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICBwcml2YXRlIG1lbnU6IE1lbnU7XG5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhczogQXBwU2VydmljZSkge1xuXG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KCk7XG4gICAgICAgIHRoaXMuYXMuY2F0ZWdvcmllcyA9IHRoaXMubWVudS5jcmVhdGUoKTtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgfVxuXG59XG4iXX0=