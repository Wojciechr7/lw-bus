import {IDeparture} from "~/app/interfaces/departure.interface";

export interface IPassage {
    id: number;
    company: string;
    route: Array<IDeparture>;
    price: number;
    departureTime?: any;
}
