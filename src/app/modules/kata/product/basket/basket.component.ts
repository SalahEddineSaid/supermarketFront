import { Component, OnInit,OnChanges,SimpleChanges,Inject,Input} from '@angular/core';
import { ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {product} from "src/app/models/model.product";



@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, OnChanges {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() productListbyIdToChild;
  form: any = {};
  name:string;
  model: any = {};
  /*
  constructor(
  
      private dialogRef: MatDialogRef<BasketComponent>,
      @Inject(MAT_DIALOG_DATA) public produitdata:product ) {

  }
*/
constructor(){}
  ngOnInit() {
    this.model={firstName:''}

  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("change child"+changes);
    for (let propName in changes) {  
      let change = changes[propName];
      let curVal  = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
    
            console.log("cur.name"+curVal);
            console.log(prevVal);
         }
  }
 
  onSubmit(){
    console.log("formname"+ this.model.firstName)
  }
  addBasket(){
    console.log("formname"+ this.model.firstName)
    
  }
  close() {
     
  }

}
