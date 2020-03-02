import {Component} from '@angular/core';
import {Order} from './order.model';
import {MatDialog} from '@angular/material';
import {OrderCreationDialogComponent} from './order-creation-dialog.component';

@Component({
  templateUrl: `orders.component.html`
})

export class OrdersComponent {

  order: Order;

  title = 'Orders management';
  columns = ['description', 'provider Id', 'opening Date'];
  data: Order[];

  constructor(private dialog: MatDialog) {
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
    this.dialog.open(OrderCreationDialogComponent);
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
