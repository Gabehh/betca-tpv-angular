import {Component} from '@angular/core';
import {CashierClosureSearch} from './cashier-closure-search.model';



@Component({
  templateUrl: 'cashier-closure-search.component.html'

})
export class CashierClosureSearchComponent {
  modelCashierClosureSearch: CashierClosureSearch;
  title = 'Cashier Closure Search';
  // tslint:disable-next-line:max-line-length
  columns = ['closureDate', 'initialCash', 'salesCard', 'salesCash', 'usedVouchers', 'deposit', 'withdrawal', 'lostCard', 'finalCash'];
  data: CashierClosureSearch[];
  constructor() {
    this.modelCashierClosureSearch = {
      // tslint:disable-next-line:max-line-length
      closureDate: null, openingDate: null, initialCash: null, salesCard: null, salesCash: null, usedVouchers: null, deposit: null, withdrawal: null, lostCard: null, finalCash: null, comment: null
    };
  }
}
