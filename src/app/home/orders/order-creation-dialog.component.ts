import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {Order} from './order.model';
import {OrderLine} from './orderLine.model';
import {OrderLineCreationDialogComponent} from './orderLine-creation-dialog.component';

@Component({
  templateUrl: 'order-creation-dialog.component.html'
})

export class OrderCreationDialogComponent {

  newOrder: Order = {description: null, providerId: null, openingDate: null, closingDate: null, orderLines: null};
  newOrderLine: OrderLine = {articleId: null, finalAmount: null, requiredAmount: null};

  title = 'Orders\' articles';
  columns = ['articleId', 'requiredAmount'];
  data: OrderLine[];

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<OrderCreationDialogComponent>,  private message: MatSnackBar) {
  }

  createOrder() {
    // TODO
  }

  createOrderLine() {
    this.dialog.open(OrderLineCreationDialogComponent);
  }
}
