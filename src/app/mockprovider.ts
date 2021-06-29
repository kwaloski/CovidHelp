import {Provider} from './provider';
import { MockSupplies } from './provider/mockSupplies';
export const Providers:Provider[]=[
    { name: 'Apex.co',description:'Apex Pvt Ltd is a 14 years old body which has history of providing resources which is scarce. It has some good channel and innumerous network to get supplies for medical items rare.', contact:'xxxxxxxxxx',distance:3,review:3,supplies:MockSupplies[0]},
    { name: 'Trust Clinic',description:'we are a private hospital',contact:'xxxxxxxxxx',distance:4,review:3,supplies:MockSupplies[1] },
    {name: 'Trust Clinic',description:'we are a private hospital',contact:'xxxxxxxxxx',distance:4,review:3,supplies:MockSupplies[0]},
    { name: 'Helpme.com',description:'we are an NGO',contact:'xxxxxxxxxx',distance:5 ,review:3,supplies:MockSupplies[2]}
  
];