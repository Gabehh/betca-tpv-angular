import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {Order} from './order.model';

@Component({
  templateUrl: 'order-creation-dialog.component.html'
})

export class OrderCreationDialogComponent {

  newOrder: Order = {description: null, providerId: null, openingDate: null, closingDate: null, orderLines: null};

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<OrderCreationDialogComponent>,  private message: MatSnackBar) {
  }

  createOrder() {
    // TODO
  }
}
