"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("~/app/services/app.service");
var find_service_1 = require("~/app/services/find.service");
var nativescript_angular_1 = require("nativescript-angular");
var modal_root_component_1 = require("~/app/components/find/find-result/modal/modal-root.component");
var FindResultComponent = /** @class */ (function () {
    function FindResultComponent(as, fs, _modalService, _vcRef) {
        this.as = as;
        this.fs = fs;
        this._modalService = _modalService;
        this._vcRef = _vcRef;
    }
    FindResultComponent.prototype.expand = function (passage) {
        var options = {
            viewContainerRef: this._vcRef,
            context: passage,
            fullscreen: true
        };
        this._modalService.showModal(modal_root_component_1.ModalDescComponent, options)
            .then(function (result) {
        });
    };
    FindResultComponent.prototype.ngOnInit = function () {
    };
    FindResultComponent = __decorate([
        core_1.Component({
            selector: 'ns-find-result',
            templateUrl: './find-result.component.html',
            styleUrls: ['./find-result.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [app_service_1.AppService,
            find_service_1.FindService,
            nativescript_angular_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], FindResultComponent);
    return FindResultComponent;
}());
exports.FindResultComponent = FindResultComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1yZXN1bHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmluZC1yZXN1bHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtFO0FBQ2xFLDBEQUFzRDtBQUN0RCw0REFBd0Q7QUFDeEQsNkRBQTRFO0FBRzVFLHFHQUFnRztBQVNoRztJQUVJLDZCQUFtQixFQUFjLEVBQ2QsRUFBZSxFQUNkLGFBQWlDLEVBQ2pDLE1BQXdCO1FBSHpCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzVDLENBQUM7SUFJTSxvQ0FBTSxHQUFiLFVBQWMsT0FBaUI7UUFDM0IsSUFBTSxPQUFPLEdBQXVCO1lBQ2hDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxNQUFNO1lBQzdCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1NBQ25CLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyx5Q0FBa0IsRUFBRSxPQUFPLENBQUM7YUFDcEQsSUFBSSxDQUFDLFVBQUMsTUFBYztRQUdyQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxzQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQXpCUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztZQUMxQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FHeUIsd0JBQVU7WUFDViwwQkFBVztZQUNDLHlDQUFrQjtZQUN6Qix1QkFBZ0I7T0FMbkMsbUJBQW1CLENBNEIvQjtJQUFELDBCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FwcFNlcnZpY2V9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9hcHAuc2VydmljZVwiO1xuaW1wb3J0IHtGaW5kU2VydmljZX0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2ZpbmQuc2VydmljZVwiO1xuaW1wb3J0IHtNb2RhbERpYWxvZ09wdGlvbnMsIE1vZGFsRGlhbG9nU2VydmljZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge01vZGFsUm9vdENvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2NvbXBvbmVudHMvZmluZC9maW5kLW9wdGlvbnMvbW9kYWwvbW9kYWwtcm9vdC5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHtNb2RhbERlc2NDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9jb21wb25lbnRzL2ZpbmQvZmluZC1yZXN1bHQvbW9kYWwvbW9kYWwtcm9vdC5jb21wb25lbnRcIjtcbmltcG9ydCB7SVBhc3NhZ2V9IGZyb20gXCJ+L2FwcC9pbnRlcmZhY2VzL3Bhc3NhZ2UuaW50ZXJmYWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtZmluZC1yZXN1bHQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9maW5kLXJlc3VsdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZmluZC1yZXN1bHQuY29tcG9uZW50LmNzcyddLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIEZpbmRSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGFzOiBBcHBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBmczogRmluZFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB9XG5cblxuXG4gICAgcHVibGljIGV4cGFuZChwYXNzYWdlOiBJUGFzc2FnZSkge1xuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLl92Y1JlZixcbiAgICAgICAgICAgIGNvbnRleHQ6IHBhc3NhZ2UsXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3dNb2RhbChNb2RhbERlc2NDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0OiBzdHJpbmcpID0+IHtcblxuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cblxufVxuIl19