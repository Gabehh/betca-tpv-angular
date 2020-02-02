import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {AppEndpoints} from '../../app-endpoints';
import {HttpService} from '../../core/http.service';
import {CashierLast} from './cashier-last.model';


@Injectable()
export class CashierService {

  constructor(private httpService: HttpService) {
  }

  readLast(): Observable<CashierLast> {
    return this.httpService.get(AppEndpoints.CASHIER_CLOSURE_LAST);
  }

  isClosedCashier(): Observable<boolean> {
    return this.readLast().pipe(
      map(cashierLast => cashierLast.closed)
    );
  }

  open(): Observable<any> {
    return this.httpService.post(AppEndpoints.CASHIER_CLOSURE);
  }

}
