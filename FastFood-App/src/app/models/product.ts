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
}
