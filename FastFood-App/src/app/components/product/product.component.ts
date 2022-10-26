import { Product } from 'src/app/models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product!: Product;
  public loadProduct: boolean;
  public extras : any;
  public extraSelected: number;

  constructor(
    private productService : ProductService,
    private router : Router
  ) { 
    this.extras =null;
    this.extraSelected = 0;
    this.loadProduct = false;
  }

  ngOnInit() {

    
    if(!this.productService.productSelected){
      this.router.navigate(['/list-category']);
    }else{
      this.product = new Product(this.productService.productSelected);
      if(this.product.extras){
        this.extras = this.product.extras[this.extraSelected];
      }
      this.loadProduct =true;
    }
    

  }

  hasPrevious(){
    if(!this.product.extras){
      return false;
    }
    return this.product.extras[this.extraSelected - 1];
  }

  hasNext(){
    if(!this.product.extras){
      return false;
    }
    return this.product.extras[this.extraSelected + 1];
  }

  previous(){
    this.extraSelected = this.extraSelected - 1;
    this.extras = this.product.extras[this.extraSelected]
  }

  next(){
    this.extraSelected = this.extraSelected + 1;
    this.extras = this.product.extras[this.extraSelected]
  }

}
