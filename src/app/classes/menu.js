"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.create = function () {
        this.homeItems = [
            {
                id: 0,
                name: 'Szukaj Połączenia',
                status: true,
                imageSrc: String.fromCharCode(0xf002),
                route: '/find'
            },
            {
                id: 1,
                name: 'Obsługiwane Busy',
                status: true,
                imageSrc: String.fromCharCode(0xf207),
                route: '/fleet'
            },
            {
                id: 2,
                name: 'Kontakt',
                status: true,
                imageSrc: String.fromCharCode(0xf0e0),
                route: '/contact'
            },
            {
                id: 3,
                name: 'Dla Przewoźników',
                status: false,
                imageSrc: String.fromCharCode(0xf2f6),
                route: '/busers'
            },
        ];
        return this.homeItems;
    };
    return Menu;
}());
exports.Menu = Menu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQTtJQUlJO0lBRUEsQ0FBQztJQUVNLHFCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2I7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osUUFBUSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO2dCQUNyQyxLQUFLLEVBQUUsT0FBTzthQUNqQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLE1BQU0sRUFBRSxJQUFJO2dCQUNaLFFBQVEsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztnQkFDckMsS0FBSyxFQUFFLFFBQVE7YUFDbEI7WUFDRDtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsU0FBUztnQkFDZixNQUFNLEVBQUUsSUFBSTtnQkFDWixRQUFRLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7Z0JBQ3JDLEtBQUssRUFBRSxVQUFVO2FBQ3BCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO2dCQUNyQyxLQUFLLEVBQUUsU0FBUzthQUNuQjtTQUNKLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUdMLFdBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJQ2F0ZWdvcnl9IGZyb20gXCJ+L2FwcC9pbnRlcmZhY2VzL2NhdGVnb3J5LmludGVyZmFjZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51IHtcclxuXHJcbiAgICBwcml2YXRlIGhvbWVJdGVtczogQXJyYXk8SUNhdGVnb3J5PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpOiBBcnJheTxJQ2F0ZWdvcnk+IHtcclxuICAgICAgICB0aGlzLmhvbWVJdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnU3p1a2FqIFBvxYLEhWN6ZW5pYScsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVNyYzogU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwMDIpLFxyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcvZmluZCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnT2JzxYJ1Z2l3YW5lIEJ1c3knLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VTcmM6IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMjA3KSxcclxuICAgICAgICAgICAgICAgIHJvdXRlOiAnL2ZsZWV0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdLb250YWt0JyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGltYWdlU3JjOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBlMCksXHJcbiAgICAgICAgICAgICAgICByb3V0ZTogJy9jb250YWN0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEbGEgUHJ6ZXdvxbpuaWvDs3cnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGltYWdlU3JjOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjJmNiksXHJcbiAgICAgICAgICAgICAgICByb3V0ZTogJy9idXNlcnMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9tZUl0ZW1zO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19