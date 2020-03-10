import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {Order} from './order.model';
import {OrderService} from './order.service';
import {OrderLine} from './orderLine.model';

@Component({
  templateUrl: 'order-edition-dialog.component.html'
})

export class OrderEditionDialogComponent {

  order: Order = {id: null, description: null, providerId: null, openingDate: null, closingDate: null, orderLines: []};

  title = 'Orders\' articles';
  columns = ['articleId', 'requiredAmount', 'finalAmount'];
  data: OrderLine[];

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<OrderEditionDialogComponent>, private message: MatSnackBar,
              private orderService: OrderService, @Inject(MAT_DIALOG_DATA) public orderData: any) {
    this.order = orderData.orderData;
    this.data = [...this.orderData.orderData.orderLines];
  }

  editOrder() {
    this.dialogRef.close();
  }

  deleteOrderLine(orderLineToDelete: OrderLine) {
    // TODO
  }
}
