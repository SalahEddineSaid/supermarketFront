import { Injectable } from '@angular/core';
import { product } from 'src/app/models/model.product';
import { Offers } from 'src/app/models/model.Offers';
import { categorys } from 'src/app/models/model.categorys';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  /* Example of using case of pricing product by id offer  */
  calculPriceBasket (price, offerId ):number{
    let sum :number;
    switch(offerId) { 
      case 1: { 
        sum=price*2;
        break; 
      } 
      case 2: { 
        sum=price*1;
         break; 
      } 
      default: { 
        sum=price*1;
         break; 
      } 
    }
  return sum;
  }
}


