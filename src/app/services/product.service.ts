import { Injectable } from '@angular/core';
import { product } from 'src/app/models/model.product';
import { Offers } from 'src/app/models/model.Offers';
import { categorys } from 'src/app/models/model.categorys';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  public productList : product[] = [
    {nameProduct :"banana", price:3, idOffer :Offers.Unitprice,idCategory:categorys.fruits},
    {nameProduct :"Avocado", price:4, idOffer : Offers.BuyOneGetOneFree,idCategory:categorys.fruits},
    {nameProduct :"melon", price:5, idOffer : Offers.ThreeForPriceOfTwo,idCategory:categorys.fruits},
    {nameProduct :"ananas", price:6, idOffer : Offers.ThreeForPriceOfTwo,idCategory:categorys.vegitable}
    
  ];

  //let product1= ;
  emps: product[] = []; 

  constructor() {
    
   }
  
   /* get all products in category Id */
   getProductsByIdCategory(id) : Array<product>   {
    
    return this.productList.filter(e=>e.idCategory==id);
  
  }
  

  getENUM(ENUM:any): string[] {
    let myEnum = [];
    let objectEnum = Object.keys(ENUM);
    const values = objectEnum.slice( 0 , objectEnum.length / 2 );
    const keys = objectEnum.slice( objectEnum.length / 2 );

    for (let i = 0 ; i < objectEnum.length/2 ; i++ ) {
      myEnum.push( { key: keys[i], value: values[i] } ); 
    }
    return myEnum;
  }
}
