import {Component} from '@angular/core';

import {CashierLast} from '../shared/cashier-last.model';
import {CashierService} from '../shared/cashier.service';

@Component({
  templateUrl: 'cashier-closed.component.html'
})
export class CashierClosedComponent {

  cashierLast: CashierLast = {closed: undefined};

  constructor(private cashierService: CashierService) {
    this.cashierService.readLast().subscribe(
      cashierLast => this.cashierLast = cashierLast
    );
  }

}
