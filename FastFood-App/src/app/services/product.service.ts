import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  private _data: any;
  private _dataOriginal: any;
  private _productSelected: Product[] = [];
  private _productsSelected: Product[] = [];

  get productsSelected(): Product[] {
    return this._productsSelected;
  }
  set productsSelected(value: Product[]) {
    this._productsSelected = value;
  }

  get productSelected(): Product[] {
    return this._productSelected;
  }
  set productSelected(value: Product[]) {
    this._productSelected = value;
  }

  get category() {
    return _.get(this._data, 'category');
  }

  constructor(private http: HttpClient) {}

  public getData() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/data/products.json').subscribe(
        (data) => {
          this._data = _.cloneDeep(data);
          this._dataOriginal = _.cloneDeep(data);
          console.log(this._data);
          resolve(true);
        },
        (error) => {
          console.error('Error al traer los productos: ' + error);
          reject(true);
        }
      );
    });
  }
}
