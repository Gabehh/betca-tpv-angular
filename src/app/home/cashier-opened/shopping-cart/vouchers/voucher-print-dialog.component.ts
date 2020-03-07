import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA} from '@angular/material';
import {Voucher} from './voucher.model';
import {VoucherService} from '../../../shared/voucher.service';

@Component({
  templateUrl: 'voucher-print-dialog.component.html'
})

export class VoucherPrintDialogComponent {

  voucher: Voucher;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<VoucherPrintDialogComponent>,
              private voucherService: VoucherService, private message: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) {
      this.voucher = this.data.voucher_object;
      console.log(this.data);
  }

  printVoucher() {
    this.voucherService.print(this.voucher).subscribe(
      () => {
      }, () => this.dialog.closeAll()
      , () => this.dialog.closeAll()
    );
  }
}
