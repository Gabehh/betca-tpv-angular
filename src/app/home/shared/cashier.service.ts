import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {AppEndpoints} from '../../app-endpoints';
import {HttpService} from '../../core/http.service';
import {CashierLast} from './cashier-last.model';


@Injectable()
export class CashierService {

  constructor(private httpService: HttpService) {
  }

  readLast(): Observable<CashierLast> {
    return this.httpService.get(AppEndpoints.CASHIER_CLOSURES_LAST);
  }

}
