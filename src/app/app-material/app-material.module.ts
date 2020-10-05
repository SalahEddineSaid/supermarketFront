import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule,MatRippleModule,MatSelectModule,MatToolbarModule,MatSort,MatPaginator, MatTableDataSource,MatFormFieldModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRippleModule,
    MatToolbarModule,MatPaginator, MatTableDataSource
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRippleModule,
    MatToolbarModule,MatPaginator, MatTableDataSource
  ]
})
export class AppMaterialModule { }