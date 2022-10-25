import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ProductService {
  private _data: any;
  private _dataOriginal: any;

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
