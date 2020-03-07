import {Component, OnInit} from '@angular/core';

import {Voucher} from './voucher.model';
import {VoucherService} from '../../../shared/voucher.service';
import {VoucherCreationDialogComponent} from './voucher-creation-dialog.component';
import {MatDialog} from '@angular/material';
import {CancelYesDialogComponent} from '../../../../core/cancel-yes-dialog.component';
import {VoucherPrintDialogComponent} from './voucher-print-dialog.component';
import {SearchVoucher} from './voucher-search.model';

@Component({
  templateUrl: `vouchers.component.html`
})
export class VouchersComponent {

  voucher: Voucher;
  searchVoucher: SearchVoucher;

  title = 'Vouchers management';
  columns = ['id', 'creationDate', 'dateOfUse', 'value'];
  data: Voucher[];

  minDate: Date;
  maxDate: Date;

  constructor(private voucherService: VoucherService, private dialog: MatDialog) {
    this.voucher = {id: null, creationDate: null, dateOfUse: null, value: null};
    this.searchVoucher = {id: null, firstDate: this.minDate, finalDate: this.maxDate};
    this.data = null;
  }

  search() {
    if (this.minDate == null) {
      this.minDate = new Date(2019, 1, 1);
      this.searchVoucher.firstDate = this.minDate;
    }
    if (this.maxDate == null) {
      this.maxDate = new Date();
      this.searchVoucher.finalDate = this.maxDate;
    }

    this.voucherService.search(this.searchVoucher).subscribe(
      data => this.data = data
    );
  }

  resetSearch() {
    this.voucher = {id: null, creationDate: null, dateOfUse: null, value: null};
  }


  create() {
    this.dialog.open(VoucherCreationDialogComponent).afterClosed().subscribe(
      result => {
        this.search();
      }
    );
  }

  read(voucher: Voucher) {
    this.dialog.open(VoucherPrintDialogComponent, {
      data: {
        voucher_object: voucher
      }
    });
  }

  delete(voucher: Voucher) {
    this.dialog.open(CancelYesDialogComponent).afterClosed().subscribe(
      result => {
        if (result) {
          this.voucherService.consume(voucher).subscribe(value => {
              this.search();
            }
          );
        }
      });
  }
}
