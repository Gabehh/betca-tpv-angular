import {Component} from '@angular/core';
import {Order} from './order.model';
import {MatDialog} from '@angular/material';
import {OrderCreationDialogComponent} from './order-creation-dialog.component';
import {OrderService} from './order.service';
import {OrderDetailDialogComponent} from './order-detail-dialog.component';
import {OrderEditionDialogComponent} from './order-edition-dialog.component';
import {CancelYesDialogComponent} from '../../core/cancel-yes-dialog.component';

@Component({
  templateUrl: `orders.component.html`
})

export class OrdersComponent {

  order: Order;
  pendingOrders: boolean = true;

  title = 'Orders management';
  columns = ['description', 'providerId', 'openingDate'];
  data: Order[];

  constructor(private dialog: MatDialog, private orderService: OrderService) {
    this.order = {id: null, description: null, providerId: null, orderLines: null, openingDate: null};
    this.data = null;
  }

  search() {
    this.orderService.getAll().subscribe(
      data => this.data = [...data]
    );
  }

  resetSearch() {
    this.order = {id: null, description: null, providerId: null, orderLines: null, openingDate: null};
  }

  create() {
    this.dialog.open(OrderCreationDialogComponent, {
      width: '600px',
    });
  }

  read(order: Order) {
    this.dialog.open(OrderDetailDialogComponent, {
      width: '600px',
      data: {
        dialogTitle: order.description,
        orderData: order
      }
    });
  }

  update(order: Order) {
    this.dialog.open(OrderEditionDialogComponent, {
      width: '600px',
      data: {
        orderData: order
      }
    });
  }

  delete(order: Order) {
    this.dialog.open(CancelYesDialogComponent).afterClosed().subscribe(
      result => {
        if (result) {
          console.log('delete');
        }
      }
    );
  }

}
