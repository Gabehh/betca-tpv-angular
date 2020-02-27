import {Component} from '@angular/core';

import {Voucher} from './voucher.model';
import {VoucherService} from './voucher.service';

@Component({
  templateUrl: `vouchers.component.html`
})
export class VouchersComponent {

  voucher: Voucher;

  title = 'Vouchers management';
  columns = ['Id', 'creationDate', 'DateOfUse', 'value'];
  data: Voucher[];

  constructor(private voucherService: VoucherService) {
    this.voucher = {id: null, creationDate: null, dateOfUse: null, value: null};
    this.data = null;
  }

  search() {
    // TODO implement search with fields
    this.voucherService.readAll().subscribe(
      data => this.data = data
    );
  }

  resetSearch() {
    this.voucher = {id: null, creationDate: null, dateOfUse: null, value: null};
  }


  create() {
    // TODO
  }

  read(voucher: Voucher) {
    // TODO
  }

  update(voucher: Voucher) {
    // TODO
  }

  delete(voucher: Voucher) {
    // TODO
  }
}
