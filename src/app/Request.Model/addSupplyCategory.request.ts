
export class AddSupplyCategory
{
    id:number=Math.floor(Math.random()*10)+1;
    name!: string;
    description!: string;
    createdDate:Date=new Date();
    isActive: boolean=false;
  }