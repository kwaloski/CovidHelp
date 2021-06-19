import { Component, OnInit } from '@angular/core';

import { MockSupplies } from './mockSupplies';
import { Supplies } from './supplies';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  listOfSupplies: Supplies[]=MockSupplies;
  
  constructor() { }

  ngOnInit(): void {
  }

}
