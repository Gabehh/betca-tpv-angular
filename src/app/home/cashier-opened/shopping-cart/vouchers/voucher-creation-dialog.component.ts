import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {Voucher} from './voucher.model';
import {VoucherService} from './voucher.service';

@Component({
  templateUrl: 'voucher-creation-dialog.component.html'
})

export class VoucherCreationDialogComponent {

  newVoucher: Voucher = {value: null, id: null, dateOfUse: null, creationDate: null };

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<VoucherCreationDialogComponent>,
              private voucherService: VoucherService, private message: MatSnackBar) {

  }
  createVoucher() {
    this.voucherService.create(this.newVoucher).subscribe(
      data => this.message.open('Voucher created: ' + data.id, null, {
        duration: 2000,
      })
    );
  }
}
