import {Address} from "@/s-models/Address";

export interface Shop {
        shopId: string;
        name: string;
        description: string;
        phone: string;
        address: Address;
}