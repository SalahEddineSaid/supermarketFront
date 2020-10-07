import { Component, OnInit,OnChanges,SimpleChanges,Inject,Input} from '@angular/core';
import { ViewEncapsulation} from '@angular/core';
import {product} from "src/app/models/model.product";
import { basket } from 'src/app/models/model.basket';
import { AfterViewInit,ViewChild } from '@angular/core';
import {MatSort,MatPaginator, MatTableDataSource } from '@angular/material';
import { BasketService } from 'src/app/services/basket.service';




@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit,OnChanges {

  @Input() productListbyIdToChild:product;
  public productObject:product;
  public basketListSubmit : Array<basket> = [];
  /*total price*/
  sumPrice:number;
  form: any = {};
  name:string;

  quantity:number;

constructor(public basketService:BasketService){}
  ngOnInit() {

    this.sumPrice=0;
  }
  

  ngOnChanges(changes: SimpleChanges): void {
     
    this.productObject=this.productListbyIdToChild;
 
    for (let propName in changes) {  
      let change = changes[propName];
      let curVal  = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
    
            console.log("cur.name"+curVal);
            console.log(prevVal);
         }
  }
 
  onSubmit(){
    this.basketListSubmit.push({"productElement":this.productObject,"quantity":this.quantity});
    this.sumPrice=this.sumPrice+this.basketService.calculPriceBasket(this.productObject.price,this.productObject.idOffer)*this.quantity;
    console.log ("Block statement execution no." +this.sumPrice);
    
  }


}
