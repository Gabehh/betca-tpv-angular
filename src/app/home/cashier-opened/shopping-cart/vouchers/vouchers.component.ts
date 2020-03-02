import {Component} from '@angular/core';

import {Voucher} from './voucher.model';
import {VoucherService} from './voucher.service';
import {VoucherCreationDialogComponent} from './voucher-creation-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  templateUrl: `vouchers.component.html`
})
export class VouchersComponent {

  voucher: Voucher;

  title = 'Vouchers management';
  columns = ['id', 'creationDate', 'dateOfUse', 'value'];
  data: Voucher[];

  constructor(private voucherService: VoucherService, private dialog: MatDialog) {
    this.voucher = {id: null, creationDate: null, dateOfUse: null, value: null};
    this.data = null;
  }

  search() {
    this.voucherService.readAll().subscribe(
      data => this.data = data
    );
  }

  resetSearch() {
    this.voucher = {id: null, creationDate: null, dateOfUse: null, value: null};
  }


  create() {
    this.dialog.open(VoucherCreationDialogComponent);
  }

  read(voucher: Voucher) {
    // TODO
  }

  update(voucher: Voucher) {
    // TODO
  }
}
