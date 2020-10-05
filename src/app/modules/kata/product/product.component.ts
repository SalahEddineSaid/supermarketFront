import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from 'src/app/models/model.product';
import { categorys } from 'src/app/models/model.categorys';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
import { BasketComponent } from 'src/app/modules/kata/product/basket/basket.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,AfterViewInit {

  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  firstName: string;
  lastName: string;
  displayedColumns: string[] = ['name', 'price','Offers','actions'];
  dataSource: MatTableDataSource<product>;
  public productList : Array<product> = [];
  public productListbyId : Array<product> = [];
  public productListbyIdToChild : product[];
  getCtegories :string[];
  animal: string;
  name: string;
  ngOnInit() {
    this.getCtegories = this.productServices.getENUM(categorys);
    this.firstName = 'John';
    this.lastName = 'Doe';
   }
  
 
  constructor(public productServices:ProductService) { 

  }

 
  getProductsByIdCategoryID(id){
    console.log("id=="+id)

    this.productListbyId=this.productServices.getProductsByIdCategory(id);
  
    this.dataSource = new MatTableDataSource(this.productListbyId);
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
 
 ngAfterViewInit() {

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog(row){ 
    
    this.productListbyIdToChild=row;
    console.log("idOffer==="+this.productListbyIdToChild);
    
  }
}


