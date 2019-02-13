"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("tns-core-modules/ui/page");
var ModalViewActionBarComponent = /** @class */ (function () {
    function ModalViewActionBarComponent(_params, _page, router, _activeRoute) {
        this._params = _params;
        this._page = _page;
        this.router = router;
        this._activeRoute = _activeRoute;
        this.localisations = [];
        this.localisations = ["Olsztyn", "Lidzbark Warmiński", "Dobre Miasto", "Smolajny", "Stary Dwór",
            "Miłogórze", "Bartoszyce", "Kraszewo"];
        this.cityIcon = String.fromCharCode(0xf64f);
    }
    ModalViewActionBarComponent.prototype.ngOnInit = function () { };
    ModalViewActionBarComponent.prototype.onClose = function (val) {
        if (val === undefined) {
            this._params.closeCallback('');
        }
        else {
            this._params.closeCallback(val);
        }
    };
    ModalViewActionBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./modal-view.component.html",
            styleUrls: ["./modal-view.component.css"]
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams, page_1.Page, router_1.RouterExtensions, router_2.ActivatedRoute])
    ], ModalViewActionBarComponent);
    return ModalViewActionBarComponent;
}());
exports.ModalViewActionBarComponent = ModalViewActionBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdmlldy1hY3Rpb24tYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGFsLXZpZXctYWN0aW9uLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELDBDQUFpRDtBQUNqRCxrRUFBc0U7QUFDdEUsaURBQWdEO0FBT2hEO0lBTUkscUNBQW9CLE9BQTBCLEVBQVUsS0FBVyxFQUFVLE1BQXdCLEVBQVUsWUFBNEI7UUFBdkgsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFKcEksa0JBQWEsR0FBa0IsRUFBRSxDQUFDO1FBS3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxZQUFZO1lBQzNGLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCw4Q0FBUSxHQUFSLGNBQWtCLENBQUM7SUFDbkIsNkNBQU8sR0FBUCxVQUFRLEdBQVc7UUFDZixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25DO0lBRUwsQ0FBQztJQXBCUSwyQkFBMkI7UUFMdkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBTytCLGdDQUFpQixFQUFpQixXQUFJLEVBQWtCLHlCQUFnQixFQUF3Qix1QkFBYztPQU5sSSwyQkFBMkIsQ0FxQnZDO0lBQUQsa0NBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxrRUFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbW9kYWwtdmlldy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL21vZGFsLXZpZXcuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxWaWV3QWN0aW9uQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgbG9jYWxpc2F0aW9uczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgcHVibGljIGNpdHlJY29uOiBzdHJpbmc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgX3BhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIF9hY3RpdmVSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgICAgICB0aGlzLmxvY2FsaXNhdGlvbnMgPSBbXCJPbHN6dHluXCIsIFwiTGlkemJhcmsgV2FybWnFhHNraVwiLCBcIkRvYnJlIE1pYXN0b1wiLCBcIlNtb2xham55XCIsIFwiU3RhcnkgRHfDs3JcIixcclxuICAgICAgICAgICAgXCJNacWCb2fDs3J6ZVwiLCBcIkJhcnRvc3p5Y2VcIiwgXCJLcmFzemV3b1wiXTtcclxuICAgICAgICB0aGlzLmNpdHlJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGY2NGYpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge31cclxuICAgIG9uQ2xvc2UodmFsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFyYW1zLmNsb3NlQ2FsbGJhY2soJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcmFtcy5jbG9zZUNhbGxiYWNrKHZhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=