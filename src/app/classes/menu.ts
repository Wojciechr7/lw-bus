import {ICategory} from "~/app/interfaces/category.interface";


export class Menu {

    private homeItems: Array<ICategory>;

    constructor() {

    }

    public create(): Array<ICategory> {
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
    }


}
