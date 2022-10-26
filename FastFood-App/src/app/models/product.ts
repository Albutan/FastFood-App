import { IProduct } from './../interfaces/iproduct';
import * as _ from 'lodash';

export class Product implements IProduct {
  constructor(data: any) {
    _.set(this, 'data', data);
  }

  get price(): number {
    return _.get(this, 'data.price');
  }
  get extras(): any {
    return _.get(this, 'data.extras');
  }
  get name(): any {
    return _.get(this, 'data.name');
  }
  get img(): string {
    return _.get(this, 'data.img');
  }
  get quantity(): any {
    return _.get(this, 'data.quantity');
  }
  set quantity(value: number) {
    _.set(this, 'data.quantity', value);
  }

  getExtras() {
    const extras:any = [];
    _.forEach(this.extras, (extra) => {
      const products = extra.products;
      _.forEach(products, product => {
        if(product.optionSelected){
          extras.push({
            "name": product.name,
            "selected": product.optionSelected.name
          })
        }else if(product.options[0].activate){
          extras.push({
            "name": product.name
          })
        }
      })
    });
    return extras;
  }

  totalOrder() {
    let total = this.price;
    _.forEach(this.extras, (extra) => {
      const products = extra.products;
      _.forEach(products, product => {
        if(product.optionSelected){
          total += product.optionSelected.price;
        }else if(product.options[0].activate){
          total += product.options[0].price;
        }
      })
    });
    return total;
  }
}
