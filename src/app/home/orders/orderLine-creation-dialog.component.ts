import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {OrderLine} from './orderLine.model';

@Component({
  templateUrl: 'orderLine-creation-dialog.component.html'
})

export class OrderLineCreationDialogComponent{
  newOrderLine: OrderLine = {articleId: null, finalAmount: null, requiredAmount: null};

  addOrderLine() {
    // TODO
  }
}
