import { Order } from './../models/order';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private _order: Order;

  constructor() {
    this._order = new Order({});
  }

  get order(): Order {
    return this._order;
  }
  set order(value: Order) {
    this._order = value;
  }
}
