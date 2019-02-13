"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var ModalDescComponent = /** @class */ (function () {
    function ModalDescComponent(_routerExtensions, _activeRoute) {
        this._routerExtensions = _routerExtensions;
        this._activeRoute = _activeRoute;
    }
    ModalDescComponent.prototype.ngOnInit = function () {
        this._routerExtensions.navigate(["modal-desc"], { relativeTo: this._activeRoute });
    };
    ModalDescComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./modal-root.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            router_2.ActivatedRoute])
    ], ModalDescComponent);
    return ModalDescComponent;
}());
exports.ModalDescComponent = ModalDescComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtcm9vdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RhbC1yb290LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsMENBQWlEO0FBTWpEO0lBQ0ksNEJBQ1ksaUJBQW1DLEVBQ25DLFlBQTRCO1FBRDVCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsaUJBQVksR0FBWixZQUFZLENBQWdCO0lBQUcsQ0FBQztJQUU1QyxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFQUSxrQkFBa0I7UUFKOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7eUNBR2lDLHlCQUFnQjtZQUNyQix1QkFBYztPQUgvQixrQkFBa0IsQ0FROUI7SUFBRCx5QkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL21vZGFsLXJvb3QuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxEZXNjQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aXZlUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wibW9kYWwtZGVzY1wiXSwgeyByZWxhdGl2ZVRvOiB0aGlzLl9hY3RpdmVSb3V0ZSB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=