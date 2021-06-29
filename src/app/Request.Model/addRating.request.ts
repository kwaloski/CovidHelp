export class AddRatingRequest{
    userId!:string;
    providerId!:string;
    rating!: number;
    comment!: string;
   
    constructor(providerId:string){
        this.providerId=providerId;
        
    }
  
}