import { Injectable } from '@angular/core';
import { product } from 'src/app/models/model.product';
import { Offers } from 'src/app/models/model.Offers';
import { categorys } from 'src/app/models/model.categorys';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  public productList : product[] = [
    {name :"banana", price:1, idOffer :Offers.Unitprice,idCategory:categorys.fruits},
    {name :"Avocado", price:2, idOffer : Offers.BuyOneGetOneFree,idCategory:categorys.fruits},
    {name :"melon", price:3, idOffer : Offers.ThreeForPriceOfTwo,idCategory:categorys.fruits},
    {name :"ananas", price:4, idOffer : Offers.ThreeForPriceOfTwo,idCategory:categorys.vegitable}
    
  ];

  //let product1= ;
  emps: product[] = []; 

  constructor() {
    
   }
  

   getProductsByIdCategory(id) : Array<product>   {
    console.log('Service => getProducts by id='+id); 
    
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
