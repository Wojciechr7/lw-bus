"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("@angular/router");
var app_service_1 = require("~/app/services/app.service");
var modal_root_component_1 = require("~/app/components/find/find-options/modal/modal-root.component");
var dialogs = require("tns-core-modules/ui/dialogs");
var find_service_1 = require("~/app/services/find.service");
var FindOptionsComponent = /** @class */ (function () {
    function FindOptionsComponent(routerExtension, activeRoute, as, fs, _modalService, _vcRef) {
        this.routerExtension = routerExtension;
        this.activeRoute = activeRoute;
        this.as = as;
        this.fs = fs;
        this._modalService = _modalService;
        this._vcRef = _vcRef;
        this.exchangeIcon = String.fromCharCode(0xf079);
    }
    FindOptionsComponent.prototype.chooseDestination = function (dest) {
        var _this = this;
        var options = {
            viewContainerRef: this._vcRef,
            context: {},
            fullscreen: true
        };
        this._modalService.showModal(modal_root_component_1.ModalRootComponent, options)
            .then(function (result) {
            var other = dest === 'from' ? 'to' : 'from';
            if (_this.fs.destinations[other] !== result) {
                _this.fs.destinations[dest] = result;
            }
            else {
                dialogs.alert("Wybrano nieprawidłową lokalizację!");
            }
        });
    };
    FindOptionsComponent.prototype.switchDestinations = function () {
        var _a;
        _a = [this.fs.destinations.to, this.fs.destinations.from], this.fs.destinations.from = _a[0], this.fs.destinations.to = _a[1];
    };
    FindOptionsComponent.prototype.search = function () {
        if (this.fs.destinations.from === '' || this.fs.destinations.to === '') {
            dialogs.alert("Najpierw uzupełnij lokalizację!").then(function () {
            });
        }
        else {
            this.fs.FindPage = 'result';
        }
    };
    FindOptionsComponent.prototype.ngOnInit = function () {
    };
    FindOptionsComponent = __decorate([
        core_1.Component({
            selector: 'ns-find-options',
            templateUrl: './find-options.component.html',
            styleUrls: ['./find-options.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            router_1.ActivatedRoute,
            app_service_1.AppService,
            find_service_1.FindService,
            nativescript_angular_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], FindOptionsComponent);
    return FindOptionsComponent;
}());
exports.FindOptionsComponent = FindOptionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1vcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbmQtb3B0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0U7QUFDbEUsNkRBQThGO0FBQzlGLDBDQUErQztBQUMvQywwREFBc0Q7QUFFdEQsc0dBQWlHO0FBQ2pHLHFEQUF1RDtBQUN2RCw0REFBd0Q7QUFReEQ7SUFLRSw4QkFBb0IsZUFBaUMsRUFDakMsV0FBMkIsRUFDNUIsRUFBYyxFQUNkLEVBQWUsRUFDZCxhQUFpQyxFQUNqQyxNQUF3QjtRQUx4QixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakMsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzVCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVsRCxDQUFDO0lBRU0sZ0RBQWlCLEdBQXhCLFVBQXlCLElBQVk7UUFBckMsaUJBaUJDO1FBaEJDLElBQU0sT0FBTyxHQUF1QjtZQUNsQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsTUFBTTtZQUM3QixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyx5Q0FBa0IsRUFBRSxPQUFPLENBQUM7YUFDcEQsSUFBSSxDQUFDLFVBQUMsTUFBYztZQUNuQixJQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUM5QyxJQUFJLEtBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLE1BQU0sRUFBRTtnQkFDMUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQzthQUNyRDtRQUVILENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVNLGlEQUFrQixHQUF6Qjs7UUFDRSx5REFBMkcsRUFBMUcsaUNBQXlCLEVBQUUsK0JBQXVCLENBQXlEO0lBQzlHLENBQUM7SUFFTSxxQ0FBTSxHQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDN0I7SUFFSCxDQUFDO0lBSUQsdUNBQVEsR0FBUjtJQUNBLENBQUM7SUFuRFUsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7WUFDM0MsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBTXFDLHVDQUFnQjtZQUNwQix1QkFBYztZQUN4Qix3QkFBVTtZQUNWLDBCQUFXO1lBQ0MseUNBQWtCO1lBQ3pCLHVCQUFnQjtPQVZqQyxvQkFBb0IsQ0FxRGhDO0lBQUQsMkJBQUM7Q0FBQSxBQXJERCxJQXFEQztBQXJEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UsIFJvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBcHBTZXJ2aWNlfSBmcm9tIFwifi9hcHAvc2VydmljZXMvYXBwLnNlcnZpY2VcIjtcbmltcG9ydCB7SURlc3RpbmF0aW9ufSBmcm9tIFwifi9hcHAvaW50ZXJmYWNlcy9kZXN0aW5hdGlvbi5pbnRlcmZhY2VcIjtcbmltcG9ydCB7TW9kYWxSb290Q29tcG9uZW50fSBmcm9tIFwifi9hcHAvY29tcG9uZW50cy9maW5kL2ZpbmQtb3B0aW9ucy9tb2RhbC9tb2RhbC1yb290LmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQge0ZpbmRTZXJ2aWNlfSBmcm9tIFwifi9hcHAvc2VydmljZXMvZmluZC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWZpbmQtb3B0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9maW5kLW9wdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maW5kLW9wdGlvbnMuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBGaW5kT3B0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGV4Y2hhbmdlSWNvbjogc3RyaW5nO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgIHByaXZhdGUgYWN0aXZlUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwdWJsaWMgYXM6IEFwcFNlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBmczogRmluZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF92Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHRoaXMuZXhjaGFuZ2VJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNzkpO1xuXG4gIH1cblxuICBwdWJsaWMgY2hvb3NlRGVzdGluYXRpb24oZGVzdDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy5fdmNSZWYsXG4gICAgICBjb250ZXh0OiB7fSxcbiAgICAgIGZ1bGxzY3JlZW46IHRydWVcbiAgICB9O1xuXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3dNb2RhbChNb2RhbFJvb3RDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgICAgIC50aGVuKChyZXN1bHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGNvbnN0IG90aGVyID0gZGVzdCA9PT0gJ2Zyb20nID8gJ3RvJyA6ICdmcm9tJztcbiAgICAgICAgICBpZiAodGhpcy5mcy5kZXN0aW5hdGlvbnNbb3RoZXJdICE9PSByZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuZnMuZGVzdGluYXRpb25zW2Rlc3RdID0gcmVzdWx0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiV3licmFubyBuaWVwcmF3aWTFgm93xIUgbG9rYWxpemFjasSZIVwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3dpdGNoRGVzdGluYXRpb25zKCkge1xuICAgIFt0aGlzLmZzLmRlc3RpbmF0aW9ucy5mcm9tLCB0aGlzLmZzLmRlc3RpbmF0aW9ucy50b10gPSBbdGhpcy5mcy5kZXN0aW5hdGlvbnMudG8sIHRoaXMuZnMuZGVzdGluYXRpb25zLmZyb21dO1xuICB9XG5cbiAgcHVibGljIHNlYXJjaCgpIHtcbiAgICBpZiAodGhpcy5mcy5kZXN0aW5hdGlvbnMuZnJvbSA9PT0gJycgfHwgdGhpcy5mcy5kZXN0aW5hdGlvbnMudG8gPT09ICcnKSB7XG4gICAgICBkaWFsb2dzLmFsZXJ0KFwiTmFqcGllcncgdXp1cGXFgm5paiBsb2thbGl6YWNqxJkhXCIpLnRoZW4oKCk9PiB7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mcy5GaW5kUGFnZSA9ICdyZXN1bHQnO1xuICAgIH1cblxuICB9XG5cblxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==