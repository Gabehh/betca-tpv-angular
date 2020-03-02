import {Component} from '@angular/core';
import {Order} from './order.model';

@Component({
  templateUrl: `orders.component.html`
})

export class OrdersComponent {

  order: Order;

  title = 'Orders management';
  columns = ['description', 'provider Id', 'opening Date'];
  data: Order[];

  constructor() {
    this.order = {description: null, providerId: null, orderLines: null, openingDate: null};
    this.data = null;
  }

  search() {
    // TODO
  }

  resetSearch() {
    this.order = {description: null, providerId: null, orderLines: null, openingDate: null};
  }

  create() {
    // TODO
  }

  read(order: Order) {
    // TODO
  }

  update(order: Order) {
    // TODO
  }

  delete(order: Order) {
    // TODO
  }

}
