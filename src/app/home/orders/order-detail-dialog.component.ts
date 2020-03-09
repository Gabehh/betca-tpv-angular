import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA} from '@angular/material';
import {Order} from './order.model';
import {OrderService} from './order.service';
import {OrderLine} from './orderLine.model';

@Component({
  templateUrl: 'order-detail-dialog.component.html'
})

export class OrderDetailDialogComponent {

  order: Order = {id: null, description: null, providerId: null, openingDate: null, closingDate: null, orderLines: []};

  title = 'Orders\' articles';
  columns = ['articleId', 'requiredAmount', 'finalAmount'];
  data: OrderLine[];

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<OrderDetailDialogComponent>, private message: MatSnackBar,
              private orderService: OrderService, @Inject(MAT_DIALOG_DATA) public orderData: any) {
    this.order = orderData.orderData;
    this.data = [...this.orderData.orderData.orderLines];
  }
}
