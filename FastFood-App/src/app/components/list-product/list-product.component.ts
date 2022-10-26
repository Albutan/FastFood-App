import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public listProduct: Product[] = [];

  constructor(
    private productService : ProductService,
    private router: Router
  ) { 
    this.listProduct = [];
  }

  ngOnInit() {
    this.listProduct = this.productService.productsSelected;
    if(!this.listProduct){
      this.router.navigate(['/list-category']);
    }
  }

  selectProduct(product:any){
    this.productService.productSelected = product;
  }


}
