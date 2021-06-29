import { Supplies } from "./provider/supplies";

export interface Provider {
  
    name: string;
    description: string;
    contact: string;
    distance: number;
    review: number;
    supplies: Supplies;

}
// "sl": 1,
// "supplyId": "abd5c9a1-496d-4ac3-aa65-6836e0d6fe72",
// "categoryId": 1,
// "userId": "8044554f-a644-4099-ade4-0c122189dd94",
// "description": "5 Oxygen cylinder",
// "createdDate": "2021-06-23T00:00:00",
// "isActive": true,
// "approvedBy": "Admin",
// "latitude": 12.2,
// "longitude": 22