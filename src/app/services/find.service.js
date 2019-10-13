"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var FindService = /** @class */ (function () {
    function FindService(http) {
        this.http = http;
        this.url = 'http://lwbus.atwebpages.com/api';
        this.findPage = 'result';
        this.destinations = {
            from: '',
            to: ''
        };
        this.foundPassagesMock = [
            {
                id: 1,
                company: 'Heniorek',
                route: [
                    {
                        name: 'Lidzbark Warmiński',
                        time: new Date("Fri, 26 Sep 2014 18:30:00 GMT+2")
                    },
                    {
                        name: 'Kraszewo',
                        time: new Date("Fri, 26 Sep 2014 18:35:00 GMT+2")
                    },
                    {
                        name: 'Miłogórze',
                        time: new Date("Fri, 26 Sep 2014 18:37:00 GMT+2")
                    },
                    {
                        name: 'Smolajny',
                        time: new Date("Fri, 26 Sep 2014 18:43:00 GMT+2")
                    },
                    {
                        name: 'Kosyń',
                        time: new Date("Fri, 26 Sep 2014 18:48:00 GMT+2")
                    },
                    {
                        name: 'Dobre Miasto',
                        time: new Date("Fri, 26 Sep 2014 19:00:00 GMT+2")
                    },
                    {
                        name: 'Stary Dwór',
                        time: new Date("Fri, 26 Sep 2014 19:07:00 GMT+2")
                    },
                    {
                        name: 'Lugwałd',
                        time: new Date("Fri, 26 Sep 2014 19:13:00 GMT+2")
                    },
                    {
                        name: 'Dywity',
                        time: new Date("Fri, 26 Sep 2014 19:23:00 GMT+2")
                    },
                    {
                        name: 'Olsztyn',
                        time: new Date("Fri, 26 Sep 2014 19:30:00 GMT+2")
                    }
                ],
                price: 9
            },
            {
                id: 2,
                company: 'Bartczak',
                route: [
                    {
                        name: 'Lidzbark Warmiński',
                        time: new Date("Fri, 26 Sep 2014 18:30:00 GMT+2")
                    },
                    {
                        name: 'Kraszewo',
                        time: new Date("Fri, 26 Sep 2014 18:35:00 GMT+2")
                    },
                    {
                        name: 'Miłogórze',
                        time: new Date("Fri, 26 Sep 2014 18:37:00 GMT+2")
                    },
                    {
                        name: 'Smolajny',
                        time: new Date("Fri, 26 Sep 2014 18:43:00 GMT+2")
                    },
                    {
                        name: 'Kosyń',
                        time: new Date("Fri, 26 Sep 2014 18:48:00 GMT+2")
                    },
                    {
                        name: 'Dobre Miasto',
                        time: new Date("Fri, 26 Sep 2014 19:00:00 GMT+2")
                    },
                    {
                        name: 'Stary Dwór',
                        time: new Date("Fri, 26 Sep 2014 19:07:00 GMT+2")
                    },
                    {
                        name: 'Lugwałd',
                        time: new Date("Fri, 26 Sep 2014 19:13:00 GMT+2")
                    },
                    {
                        name: 'Dywity',
                        time: new Date("Fri, 26 Sep 2014 19:23:00 GMT+2")
                    },
                    {
                        name: 'Olsztyn',
                        time: new Date("Fri, 26 Sep 2014 19:30:00 GMT+2")
                    }
                ],
                price: 9
            },
            {
                id: 3,
                company: 'Mobilis',
                route: [
                    {
                        name: 'Lidzbark Warmiński',
                        time: new Date("Fri, 26 Sep 2014 18:30:00 GMT+2")
                    },
                    {
                        name: 'Kraszewo',
                        time: new Date("Fri, 26 Sep 2014 18:35:00 GMT+2")
                    },
                    {
                        name: 'Miłogórze',
                        time: new Date("Fri, 26 Sep 2014 18:37:00 GMT+2")
                    },
                    {
                        name: 'Smolajny',
                        time: new Date("Fri, 26 Sep 2014 18:43:00 GMT+2")
                    },
                    {
                        name: 'Kosyń',
                        time: new Date("Fri, 26 Sep 2014 18:48:00 GMT+2")
                    },
                    {
                        name: 'Dobre Miasto',
                        time: new Date("Fri, 26 Sep 2014 19:00:00 GMT+2")
                    },
                    {
                        name: 'Stary Dwór',
                        time: new Date("Fri, 26 Sep 2014 19:07:00 GMT+2")
                    },
                    {
                        name: 'Lugwałd',
                        time: new Date("Fri, 26 Sep 2014 19:13:00 GMT+2")
                    },
                    {
                        name: 'Dywity',
                        time: new Date("Fri, 26 Sep 2014 19:23:00 GMT+2")
                    },
                    {
                        name: 'Olsztyn',
                        time: new Date("Fri, 26 Sep 2014 19:30:00 GMT+2")
                    }
                ],
                price: 5
            }
        ];
    }
    FindService.prototype.getPassages = function (_a) {
        var from = _a.from, to = _a.to, hour = _a.hour, date = _a.date;
        return this.http.get(this.url + "/publicApi/passages/" + from + "/" + to + "/" + hour + "/" + date + "/" + new Date().getFullYear());
    };
    FindService.prototype.getStops = function () {
        return this.http.get(this.url + "/publicApi/stops");
    };
    Object.defineProperty(FindService.prototype, "FindPage", {
        get: function () {
            return this.findPage;
        },
        set: function (page) {
            this.findPage = page;
        },
        enumerable: true,
        configurable: true
    });
    FindService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FindService);
    return FindService;
}());
exports.FindService = FindService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmluZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLDZDQUFnRDtBQU1oRDtJQVFFLHFCQUNZLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFFMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQ0FBaUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2xCLElBQUksRUFBRSxFQUFFO1lBQ1IsRUFBRSxFQUFFLEVBQUU7U0FDUCxDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHO1lBQ3ZCO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLG9CQUFvQjt3QkFDMUIsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGlDQUFpQyxDQUFDO3FCQUNsRDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGlDQUFpQyxDQUFDO3FCQUNsRDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsV0FBVzt3QkFDakIsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGlDQUFpQyxDQUFDO3FCQUNsRDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGlDQUFpQyxDQUFDO3FCQUNsRDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsT0FBTzt3QkFDYixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsaUNBQWlDLENBQUM7cUJBQ2xEO29CQUNEO3dCQUNFLElBQUksRUFBRSxjQUFjO3dCQUNwQixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsaUNBQWlDLENBQUM7cUJBQ2xEO29CQUNE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bnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJRGVzdGluYXRpb259IGZyb20gXCJ+L2FwcC9pbnRlcmZhY2VzL2Rlc3RpbmF0aW9uLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJUGFzc2FnZX0gZnJvbSBcIn4vYXBwL2ludGVyZmFjZXMvcGFzc2FnZS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZpbmRTZXJ2aWNlIHtcblxuICAvLyBvcHRpb25zLCByZXN1bHRcbiAgcHJpdmF0ZSBmaW5kUGFnZTogc3RyaW5nO1xuICBwdWJsaWMgZGVzdGluYXRpb25zOiBJRGVzdGluYXRpb247XG4gIHB1YmxpYyBmb3VuZFBhc3NhZ2VzTW9jazogQXJyYXk8SVBhc3NhZ2U+O1xuICBwcml2YXRlIHVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XG4gICkge1xuICAgIHRoaXMudXJsID0gJ2h0dHA6Ly9sd2J1cy5hdHdlYnBhZ2VzLmNvbS9hcGknO1xuICAgIHRoaXMuZmluZFBhZ2UgPSAncmVzdWx0JztcbiAgICB0aGlzLmRlc3RpbmF0aW9ucyA9IHtcbiAgICAgIGZyb206ICcnLFxuICAgICAgdG86ICcnXG4gICAgfTtcbiAgICB0aGlzLmZvdW5kUGFzc2FnZXNNb2NrID0gW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgY29tcGFueTogJ0hlbmlvcmVrJyxcbiAgICAgICAgcm91dGU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTGlkemJhcmsgV2FybWnFhHNraScsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTg6MzA6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdLcmFzemV3bycsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTg6MzU6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdNacWCb2fDs3J6ZScsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTg6Mzc6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdTbW9sYWpueScsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTg6NDM6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdLb3N5xYQnLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE4OjQ4OjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRG9icmUgTWlhc3RvJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxOTowMDowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1N0YXJ5IER3w7NyJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxOTowNzowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0x1Z3dhxYJkJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxOToxMzowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0R5d2l0eScsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTk6MjM6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdPbHN6dHluJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxOTozMDowMCBHTVQrMlwiKVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcHJpY2U6IDlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBjb21wYW55OiAnQmFydGN6YWsnLFxuICAgICAgICByb3V0ZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdMaWR6YmFyayBXYXJtacWEc2tpJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxODozMDowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0tyYXN6ZXdvJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxODozNTowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ01pxYJvZ8OzcnplJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxODozNzowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1Ntb2xham55JyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxODo0MzowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0tvc3nFhCcsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTg6NDg6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdEb2JyZSBNaWFzdG8nLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE5OjAwOjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnU3RhcnkgRHfDs3InLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE5OjA3OjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTHVnd2HFgmQnLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE5OjEzOjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRHl3aXR5JyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxOToyMzowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ09sc3p0eW4nLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE5OjMwOjAwIEdNVCsyXCIpXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBwcmljZTogOVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIGNvbXBhbnk6ICdNb2JpbGlzJyxcbiAgICAgICAgcm91dGU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTGlkemJhcmsgV2FybWnFhHNraScsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTg6MzA6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdLcmFzemV3bycsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTg6MzU6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdNacWCb2fDs3J6ZScsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTg6Mzc6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdTbW9sYWpueScsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTg6NDM6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdLb3N5xYQnLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE4OjQ4OjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRG9icmUgTWlhc3RvJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxOTowMDowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1N0YXJ5IER3w7NyJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxOTowNzowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0x1Z3dhxYJkJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxOToxMzowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0R5d2l0eScsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTk6MjM6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdPbHN6dHluJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxOTozMDowMCBHTVQrMlwiKVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcHJpY2U6IDVcbiAgICAgIH1cbiAgICBdO1xuXG4gIH1cblxuICBwdWJsaWMgZ2V0UGFzc2FnZXMoe2Zyb20sIHRvLCBob3VyLCBkYXRlfSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmx9L3B1YmxpY0FwaS9wYXNzYWdlcy8ke2Zyb219LyR7dG99LyR7aG91cn0vJHtkYXRlfS8ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTdG9wcygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsfS9wdWJsaWNBcGkvc3RvcHNgKTtcbiAgfVxuXG4gIGdldCBGaW5kUGFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZpbmRQYWdlO1xuICB9XG4gIHNldCBGaW5kUGFnZShwYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZpbmRQYWdlID0gcGFnZTtcbiAgfVxuXG5cbn1cbiJdfQ==