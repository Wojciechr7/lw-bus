"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("@angular/router");
var app_service_1 = require("~/app/services/app.service");
var find_service_1 = require("~/app/services/find.service");
var FindComponent = /** @class */ (function () {
    function FindComponent(routerExtension, activeRoute, as, fs, _modalService, _vcRef) {
        this.routerExtension = routerExtension;
        this.activeRoute = activeRoute;
        this.as = as;
        this.fs = fs;
        this._modalService = _modalService;
        this._vcRef = _vcRef;
    }
    FindComponent.prototype.navigate = function () {
        if (this.fs.FindPage === 'options') {
            this.as.TabSelectedIndex = 0;
        }
        else {
            this.fs.FindPage = 'options';
        }
    };
    FindComponent.prototype.chooseLabel = function () {
        if (this.fs.FindPage === 'options') {
            return 'Wyszukaj';
        }
        else {
            return 'Dostępne Przejazdy';
        }
    };
    FindComponent.prototype.ngOnInit = function () {
    };
    FindComponent = __decorate([
        core_1.Component({
            selector: 'ns-find',
            templateUrl: './find.component.html',
            styleUrls: ['./find.component.css'],
            providers: [nativescript_angular_1.ModalDialogService],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            router_1.ActivatedRoute,
            app_service_1.AppService,
            find_service_1.FindService,
            nativescript_angular_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], FindComponent);
    return FindComponent;
}());
exports.FindComponent = FindComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUM3RSw2REFBOEY7QUFDOUYsMENBQXVEO0FBQ3ZELDBEQUFzRDtBQUl0RCw0REFBd0Q7QUFTeEQ7SUFNRSx1QkFBb0IsZUFBaUMsRUFDakMsV0FBMkIsRUFDNUIsRUFBYyxFQUNkLEVBQWUsRUFDZCxhQUFpQyxFQUNqQyxNQUF3QjtRQUx4QixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakMsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzVCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBRzVDLENBQUM7SUFHTSxnQ0FBUSxHQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztTQUM5QjtJQUVILENBQUM7SUFHTSxtQ0FBVyxHQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ2xDLE9BQU8sVUFBVSxDQUFDO1NBQ25CO2FBQU07WUFDTCxPQUFPLG9CQUFvQixDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUdELGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBdENVLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7WUFDL0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBT3FDLHVDQUFnQjtZQUNwQix1QkFBYztZQUN4Qix3QkFBVTtZQUNWLDBCQUFXO1lBQ0MseUNBQWtCO1lBQ3pCLHVCQUFnQjtPQVhqQyxhQUFhLENBd0N6QjtJQUFELG9CQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb2RhbERpYWxvZ09wdGlvbnMsIE1vZGFsRGlhbG9nU2VydmljZSwgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7QXBwU2VydmljZX0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2FwcC5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZGFsUm9vdENvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2NvbXBvbmVudHMvZmluZC9maW5kLW9wdGlvbnMvbW9kYWwvbW9kYWwtcm9vdC5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHtJRGVzdGluYXRpb259IGZyb20gXCJ+L2FwcC9pbnRlcmZhY2VzL2Rlc3RpbmF0aW9uLmludGVyZmFjZVwiO1xuaW1wb3J0IHtGaW5kU2VydmljZX0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2ZpbmQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1maW5kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maW5kLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbTW9kYWxEaWFsb2dTZXJ2aWNlXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgRmluZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmVSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIHB1YmxpYyBhczogQXBwU2VydmljZSxcbiAgICAgICAgICAgICAgcHVibGljIGZzOiBGaW5kU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG5cblxuICB9XG5cblxuICBwdWJsaWMgbmF2aWdhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZnMuRmluZFBhZ2UgPT09ICdvcHRpb25zJykge1xuICAgICAgdGhpcy5hcy5UYWJTZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mcy5GaW5kUGFnZSA9ICdvcHRpb25zJztcbiAgICB9XG5cbiAgfVxuXG5cbiAgcHVibGljIGNob29zZUxhYmVsKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZnMuRmluZFBhZ2UgPT09ICdvcHRpb25zJykge1xuICAgICAgcmV0dXJuICdXeXN6dWthaic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnRG9zdMSZcG5lIFByemVqYXpkeSc7XG4gICAgfVxuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbn1cbiJdfQ==