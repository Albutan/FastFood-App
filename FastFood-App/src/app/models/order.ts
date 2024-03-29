import { Product } from 'src/app/models/product';
import { IOrder } from '../interfaces/iorder';
import * as _ from 'lodash';

export class Order implements IOrder {
  constructor(data: any) {
    _.set(this, 'data', data);
    this.productsOrder = [];
  }

  get productsOrder(): Product[] {
    return _.get(this, 'data.productsOrder');
  }
  set productsOrder(value: Product[]) {
    _.set(this, 'data.productsOrder', value);
  }

  addProduct(product: Product) {
    const productFound = _.find(this.productsOrder, (p) => {
      let copy = _.cloneDeep(p);
      _.unset(copy, 'data.quantity');
      return _.isEqual(copy, product);
    });
    if (productFound) {
      productFound.quantity++;
    } else {
      product.quantity = 1;
      this.productsOrder.push(product);
    }
  }

  onePlusProduct(product: Product) {
    product.quantity++;
  }

  oneLessProduct(product: Product) {
    product.quantity--;
    if (product.quantity === 0) {
      _.remove(this.productsOrder, (p) => _.isEqual(p, product));
    }
  }

  quantityProducts(){
    return this.productsOrder.length;
  }

  totalOrder(){
    let total = 0;
    _.forEach(this.productsOrder, p => {
      total += p.totalOrder() * p.quantity;
    })
    return total;
  }

}
