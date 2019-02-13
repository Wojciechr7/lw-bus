"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppService = /** @class */ (function () {
    function AppService() {
        this.tabSelectedIndex = 1;
    }
    Object.defineProperty(AppService.prototype, "TabSelectedIndex", {
        get: function () {
            return this.tabSelectedIndex;
        },
        set: function (tab) {
            this.tabSelectedIndex = tab;
        },
        enumerable: true,
        configurable: true
    });
    AppService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQU0zQztJQVFFO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBR0Qsc0JBQUksd0NBQWdCO2FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzthQUNELFVBQXFCLEdBQVc7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUM5QixDQUFDOzs7T0FIQTtJQWZVLFVBQVU7UUFIdEIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csVUFBVSxDQW9CdEI7SUFBRCxpQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJQ2F0ZWdvcnl9IGZyb20gXCJ+L2FwcC9pbnRlcmZhY2VzL2NhdGVnb3J5LmludGVyZmFjZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcblxuXG4gIHB1YmxpYyBjYXRlZ29yaWVzOiBBcnJheTxJQ2F0ZWdvcnk+O1xuICBwcml2YXRlIHRhYlNlbGVjdGVkSW5kZXg6IG51bWJlcjtcblxuXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcbiAgfVxuXG5cbiAgZ2V0IFRhYlNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YWJTZWxlY3RlZEluZGV4O1xuICB9XG4gIHNldCBUYWJTZWxlY3RlZEluZGV4KHRhYjogbnVtYmVyKSB7XG4gICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gdGFiO1xuICB9XG5cbn1cbiJdfQ==