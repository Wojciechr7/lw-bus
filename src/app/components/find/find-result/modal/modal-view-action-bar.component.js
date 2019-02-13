"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("tns-core-modules/ui/page");
var ModalViewDescComponent = /** @class */ (function () {
    function ModalViewDescComponent(_params, _page, router, _activeRoute) {
        this._params = _params;
        this._page = _page;
        this.router = router;
        this._activeRoute = _activeRoute;
        this.cityIcon = String.fromCharCode(0xf64f);
        this.passage = _params.context;
    }
    ModalViewDescComponent.prototype.ngOnInit = function () {
    };
    ModalViewDescComponent.prototype.onClose = function (val) {
        if (val === undefined) {
            this._params.closeCallback('');
        }
        else {
            this._params.closeCallback(val);
        }
    };
    ModalViewDescComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./modal-view.component.html",
            styleUrls: ["./modal-view.component.css"]
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams, page_1.Page, router_1.RouterExtensions, router_2.ActivatedRoute])
    ], ModalViewDescComponent);
    return ModalViewDescComponent;
}());
exports.ModalViewDescComponent = ModalViewDescComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdmlldy1hY3Rpb24tYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGFsLXZpZXctYWN0aW9uLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELDBDQUFpRDtBQUNqRCxrRUFBc0U7QUFDdEUsaURBQWdEO0FBUWhEO0lBTUksZ0NBQW9CLE9BQTBCLEVBQVUsS0FBVyxFQUFVLE1BQXdCLEVBQVUsWUFBNEI7UUFBdkgsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDdkksSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNuQyxDQUFDO0lBRUQseUNBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCx3Q0FBTyxHQUFQLFVBQVEsR0FBVztRQUNmLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkM7SUFFTCxDQUFDO0lBckJRLHNCQUFzQjtRQUxsQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzt5Q0FPK0IsZ0NBQWlCLEVBQWlCLFdBQUksRUFBa0IseUJBQWdCLEVBQXdCLHVCQUFjO09BTmxJLHNCQUFzQixDQXNCbEM7SUFBRCw2QkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQge0lQYXNzYWdlfSBmcm9tIFwifi9hcHAvaW50ZXJmYWNlcy9wYXNzYWdlLmludGVyZmFjZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tb2RhbC12aWV3LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbW9kYWwtdmlldy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFZpZXdEZXNjQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgY2l0eUljb246IHN0cmluZztcclxuICAgIHB1YmxpYyBwYXNzYWdlOiBJUGFzc2FnZTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSBfcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgX2FjdGl2ZVJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMuY2l0eUljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjY0Zik7XHJcbiAgICAgICAgdGhpcy5wYXNzYWdlID0gX3BhcmFtcy5jb250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuICAgIG9uQ2xvc2UodmFsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFyYW1zLmNsb3NlQ2FsbGJhY2soJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcmFtcy5jbG9zZUNhbGxiYWNrKHZhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=