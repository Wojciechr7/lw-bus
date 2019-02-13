"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FindService = /** @class */ (function () {
    function FindService() {
        this.findPage = 'result';
        this.destinations = {
            from: 'Lidzbark Warmiński',
            to: 'Olsztyn'
        };
        this.foundPassagesMock = [
            {
                id: 1,
                company: 'Heniorek',
                stops: [
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
                stops: [
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
                stops: [
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
        __metadata("design:paramtypes", [])
    ], FindService);
    return FindService;
}());
exports.FindService = FindService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmluZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTzNDO0lBT0U7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2xCLElBQUksRUFBRSxvQkFBb0I7WUFDMUIsRUFBRSxFQUFFLFNBQVM7U0FDZCxDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHO1lBQ3ZCO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLG9CQUFvQjt3QkFDMUIsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGlDQUFpQyxDQUFDO3FCQUNsRDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGlDQUFpQyxDQUFDO3FCQUNsRDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsV0FBVzt3QkFDakIsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGlDQUFpQyxDQUFDO3FCQUNsRDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGlDQUFpQyxDQUFDO3FCQUNsRDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsT0FBTzt3QkFDYixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsaUNBQWlDLENBQUM7cUJBQ2xEO29CQUNEO3dCQUNFLElBQUksRUFBRSxjQUFjO3dCQUNwQixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsaUNBQWlDLENBQUM7cUJBQ2xEO29CQUNEO3dCQUNFLElBQUksRUFBRSxZQUFZO3dCQUNsQixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsaUNBQWlDLENBQUM7cUJBQ2xEO29CQUNEO3dCQUNFLElB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QUFDO3FCQUNsRDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsaUNBQWlDLENBQUM7cUJBQ2xEO29CQUNEO3dCQUNFLElBQUksRUFBRSxTQUFTO3dCQUNmLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQztxQkFDbEQ7aUJBQ0Y7Z0JBQ0QsS0FBSyxFQUFFLENBQUM7YUFDVDtTQUNGLENBQUM7SUFFSixDQUFDO0lBR0Qsc0JBQUksaUNBQVE7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDO2FBQ0QsVUFBYSxJQUFZO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7OztPQUhBO0lBbEtVLFdBQVc7UUFIdkIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csV0FBVyxDQXdLdkI7SUFBRCxrQkFBQztDQUFBLEFBeEtELElBd0tDO0FBeEtZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJRGVzdGluYXRpb259IGZyb20gXCJ+L2FwcC9pbnRlcmZhY2VzL2Rlc3RpbmF0aW9uLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJUGFzc2FnZX0gZnJvbSBcIn4vYXBwL2ludGVyZmFjZXMvcGFzc2FnZS5pbnRlcmZhY2VcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmluZFNlcnZpY2Uge1xuXG4gIC8vIG9wdGlvbnMsIHJlc3VsdFxuICBwcml2YXRlIGZpbmRQYWdlOiBzdHJpbmc7XG4gIHB1YmxpYyBkZXN0aW5hdGlvbnM6IElEZXN0aW5hdGlvbjtcbiAgcHVibGljIGZvdW5kUGFzc2FnZXNNb2NrOiBBcnJheTxJUGFzc2FnZT47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maW5kUGFnZSA9ICdyZXN1bHQnO1xuICAgIHRoaXMuZGVzdGluYXRpb25zID0ge1xuICAgICAgZnJvbTogJ0xpZHpiYXJrIFdhcm1pxYRza2knLFxuICAgICAgdG86ICdPbHN6dHluJ1xuICAgIH07XG4gICAgdGhpcy5mb3VuZFBhc3NhZ2VzTW9jayA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGNvbXBhbnk6ICdIZW5pb3JlaycsXG4gICAgICAgIHN0b3BzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0xpZHpiYXJrIFdhcm1pxYRza2knLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE4OjMwOjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnS3Jhc3pld28nLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE4OjM1OjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTWnFgm9nw7NyemUnLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE4OjM3OjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnU21vbGFqbnknLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE4OjQzOjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnS29zecWEJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxODo0ODowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0RvYnJlIE1pYXN0bycsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTk6MDA6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdTdGFyeSBEd8OzcicsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTk6MDc6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdMdWd3YcWCZCcsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTk6MTM6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdEeXdpdHknLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE5OjIzOjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnT2xzenR5bicsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTk6MzA6MDAgR01UKzJcIilcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHByaWNlOiA5XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgY29tcGFueTogJ0JhcnRjemFrJyxcbiAgICAgICAgc3RvcHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTGlkemJhcmsgV2FybWnFhHNraScsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTg6MzA6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdLcmFzemV3bycsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTg6MzU6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdNacWCb2fDs3J6ZScsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTg6Mzc6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdTbW9sYWpueScsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTg6NDM6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdLb3N5xYQnLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE4OjQ4OjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRG9icmUgTWlhc3RvJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxOTowMDowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1N0YXJ5IER3w7NyJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxOTowNzowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0x1Z3dhxYJkJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxOToxMzowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0R5d2l0eScsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTk6MjM6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdPbHN6dHluJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxOTozMDowMCBHTVQrMlwiKVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcHJpY2U6IDlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBjb21wYW55OiAnTW9iaWxpcycsXG4gICAgICAgIHN0b3BzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0xpZHpiYXJrIFdhcm1pxYRza2knLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE4OjMwOjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnS3Jhc3pld28nLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE4OjM1OjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTWnFgm9nw7NyemUnLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE4OjM3OjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnU21vbGFqbnknLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE4OjQzOjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnS29zecWEJyxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKFwiRnJpLCAyNiBTZXAgMjAxNCAxODo0ODowMCBHTVQrMlwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0RvYnJlIE1pYXN0bycsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTk6MDA6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdTdGFyeSBEd8OzcicsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTk6MDc6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdMdWd3YcWCZCcsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTk6MTM6MDAgR01UKzJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdEeXdpdHknLFxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoXCJGcmksIDI2IFNlcCAyMDE0IDE5OjIzOjAwIEdNVCsyXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnT2xzenR5bicsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShcIkZyaSwgMjYgU2VwIDIwMTQgMTk6MzA6MDAgR01UKzJcIilcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHByaWNlOiA1XG4gICAgICB9XG4gICAgXTtcblxuICB9XG5cblxuICBnZXQgRmluZFBhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5maW5kUGFnZTtcbiAgfVxuICBzZXQgRmluZFBhZ2UocGFnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5maW5kUGFnZSA9IHBhZ2U7XG4gIH1cblxuXG59XG4iXX0=