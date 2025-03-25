export interface Event {
        id: string;
        name: string;
        eventType: string;
        description?: string;
        urlMelee?: string;
        startDate: string | Date;
        endDate: string | Date;
        createdAt: string | Date;
        updatedAt: string | Date;
        shopId: string;
}