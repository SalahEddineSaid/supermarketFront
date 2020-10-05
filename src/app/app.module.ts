import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog'
import { MatInputModule,MatCardModule,MatOptionModule,MatFormFieldModule,MatIconModule,MatButtonModule,MatRippleModule,MatSelectModule,MatToolbarModule,MatSort,MatPaginator, MatTableDataSource } from '@angular/material';
import {MatPaginatorModule, 
  MatTableModule, 
  MatSortModule } from '@angular/material'
  
import {MatDialog, MatDialogRef,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { HomeComponent } from './modules/general/home/home.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { AboutComponent } from './modules/general/about/about.component';
import { SigninComponent } from './modules/general/signin/signin.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { ProductComponent } from './modules/kata/product/product.component';
import { BasketComponent } from './modules/kata/product/basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    SigninComponent,
    NotFoundComponent,
    ProductComponent,
    BasketComponent,
    
  ],
  imports: [
  
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule, 
    MatPaginatorModule, 
    MatTableModule, 
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule
    
    
  ],
  entryComponents: [
    BasketComponent
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
