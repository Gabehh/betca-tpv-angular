import {Component, OnInit} from '@angular/core';

import {Voucher} from '../../../shared/voucher.model';
import {VoucherService} from '../../../shared/voucher.service';
import {VoucherCreationDialogComponent} from './voucher-creation-dialog.component';
import {MAT_DATE_LOCALE, MatDialog} from '@angular/material';
import {CancelYesDialogComponent} from '../../../../core/cancel-yes-dialog.component';
import {VoucherPrintDialogComponent} from './voucher-print-dialog.component';
import {SearchVoucher} from './voucher-search.model';

@Component({
  templateUrl: `vouchers.component.html`,
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
  ],
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
    this.data = null;
    this.maxDate = new Date();
    this.minDate = new Date(2020, 1, 1);
    this.searchVoucher = {id: null, firstDate: null, finalDate: null};
  }

  search() {

    if (this.searchVoucher.firstDate == null) {
      this.searchVoucher.firstDate = new Date(2020, 1, 1);
    }
    if (this.searchVoucher.finalDate == null ) {
      this.searchVoucher.finalDate = new Date();
    }

    this.voucherService.search(this.searchVoucher).subscribe(
      data => this.data = data
    );
  }

  resetSearch() {
    this.searchVoucher.firstDate = null;
    this.searchVoucher.finalDate = null;
    this.searchVoucher.id = null;
  }


  create() {
    this.dialog.open(VoucherCreationDialogComponent).afterClosed().subscribe(
      result => {
        this.search();
      }
    );
  }

  print(voucher: Voucher) {
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
