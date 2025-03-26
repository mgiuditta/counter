import {Event} from "@/s-models/Event";
import {Shop} from "@/s-models/Shop";

export const mockedEvents: (Event & { shop: Shop })[] = [
        {
                id: "1",
                name: "Spring Cup",
                eventType: "Standard",
                description: "Torneo di primavera",
                urlMelee: "https://melee.gg/event/1",
                startDate: "2025-06-12T15:00:00",
                endDate: "2025-06-12T19:00:00",
                createdAt: "2025-03-01T10:00:00",
                updatedAt: "2025-03-01T10:00:00",
                shopId: "shop1",
                shop: {
                        shopId: "shop1",
                        name: "Ludoteca Milano",
                        description: "Negozio di giochi da tavolo",
                        phone: "3331234567",
                        address: {
                                id: "addr1",
                                street: "Via Roma 1",
                                city: "Milano",
                                state: "MI",
                                zipCode: "20100",
                                country: "Italia",
                                district: "Centro",
                                additionalInfo: "",
                                latitude: 45.4642,
                                longitude: 9.19,
                        },
                },
        },
        {
                id: "2",
                name: "Summer Smash",
                eventType: "Draft",
                description: "Sfida estiva",
                urlMelee: "https://melee.gg/event/2",
                startDate: "2025-08-20T17:00:00",
                endDate: "2025-08-20T21:00:00",
                createdAt: "2025-03-02T10:00:00",
                updatedAt: "2025-03-02T10:00:00",
                shopId: "shop2",
                shop: {
                        shopId: "shop2",
                        name: "Game Zone Roma",
                        description: "Tornei e giochi di carte",
                        phone: "3339876543",
                        address: {
                                id: "addr2",
                                street: "Via Appia 100",
                                city: "Roma",
                                state: "RM",
                                zipCode: "00100",
                                country: "Italia",
                                district: "Sud",
                                additionalInfo: "",
                                latitude: 41.9028,
                                longitude: 12.4964,
                        },
                },
        },
];