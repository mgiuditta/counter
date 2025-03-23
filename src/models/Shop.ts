import {Address} from "./address.model";

export interface Shop {
        shopId: string;
        name: string;
        description: string;
        phone: string;
        address: Address;
}