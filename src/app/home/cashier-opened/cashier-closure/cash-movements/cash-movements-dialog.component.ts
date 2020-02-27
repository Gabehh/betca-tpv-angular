import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CashierMovements} from './cash-movements.model';


@Component({
  templateUrl: 'cash-movements-dialog.component.html',
  styleUrls: ['cash-movements-dialog.component.css']
})
export class CashMovementsDialogComponent {

  cashMovements: CashierMovements = {cash: null, comment: undefined};

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<CashMovementsDialogComponent>) {

  }

  move() {
    // TODO ...
    console.log('In construction!!!');
  }

}
