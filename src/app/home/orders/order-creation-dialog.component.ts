import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {Order} from './order.model';
import {OrderLine} from './orderLine.model';
import {OrderService} from './order.service';

@Component({
  templateUrl: 'order-creation-dialog.component.html'
})

export class OrderCreationDialogComponent {

  order: Order = {description: null, providerId: null, openingDate: null, closingDate: null, orderLines: []};
  orderLine: OrderLine = {articleId: null, finalAmount: null, requiredAmount: null};

  title = 'Orders\' articles';
  columns = ['articleId', 'requiredAmount'];
  data: OrderLine[];

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<OrderCreationDialogComponent>, private message: MatSnackBar,
              private orderService: OrderService) {
  }

  createOrder() {
    this.orderService.createOrder(this.order).subscribe(
      data => {
        this.message.open('Order created: ' + data.description, null, {
          duration: 2000,
        });
        this.dialogRef.close();
      });
  }

  addOrderLine() {
    this.order.orderLines.push({articleId: this.orderLine.articleId, requiredAmount: this.orderLine.requiredAmount});
    this.data = [...this.order.orderLines];
  }

  deleteOrderLine(orderLineDelete: OrderLine){
    const index = this.order.orderLines.findIndex(value => value.articleId === orderLineDelete.articleId);
    if (index > -1) {
      this.order.orderLines.splice(index, 1);
    }
    this.data = [... this.order.orderLines];
  }

}
