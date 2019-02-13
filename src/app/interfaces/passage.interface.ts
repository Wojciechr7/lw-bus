import {IBusStop} from "~/app/interfaces/bus-stop.interface";

export interface IPassage {
    id: number;
    company: string;
    stops: Array<IBusStop>;
    price: number;
}
