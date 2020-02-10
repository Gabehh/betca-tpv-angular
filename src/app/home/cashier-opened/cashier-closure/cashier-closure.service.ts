import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '../../../core/http.service';
import {CashierState} from './cashier-state.model';
import {CashierClosure} from './cashier-closure.model';
import {AppEndpoints} from '../../../app-endpoints';

@Injectable()
export class CashierClosureService {

  constructor(private httpService: HttpService) {
  }

  close(cashierClosure: CashierClosure): Observable<void> {
    return this.httpService.patch(AppEndpoints.CASHIER_CLOSURES_LAST, cashierClosure);
  }

  readState(): Observable<CashierState> {
    return this.httpService.get(AppEndpoints.CASHIER_CLOSURES_LAST_STATE);
  }

}
