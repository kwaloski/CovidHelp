import { Guid } from "guid-typescript";

export class VerifyOtp{
    CorrelationId:string=Guid.create().toString();
    otp!: number;
    MobileNumber!: number;

}   