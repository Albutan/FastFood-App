import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css'],
})
export class ListCategoryComponent implements OnInit {
  public listcategory: any[];

  constructor(
    private productService: ProductService
    ) {
    this.listcategory = [];
  }

  ngOnInit() {
    this.listcategory = this.productService.category;
  }

  selectCategory(category:any){
    this.productService.productSelected = category.products;
  }
}
