import { Guid } from "guid-typescript";

export class SendOtp{
    CorrelationId:string=Guid.create().toString();
    Userid!: number;
   
    MobileNumber!:string;
    


}