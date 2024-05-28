import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild("modal_product", {static: false}) modalProduct:any;

  public product!: Product;
  public loadProduct: boolean;
  public extras : any;
  public extraSelected: number;

  constructor(
    private productService : ProductService,
    private router : Router,
    private orderService: OrderService,
    private modalService: NgbModal
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

  madeOrder(){
    this.orderService.order.addProduct(this.product);
    console.log(this.orderService.order);
    this.productService.clearProducts();
    this.modalService.open(this.modalProduct);
    this.router.navigate(['/list-category']);
  }

}
