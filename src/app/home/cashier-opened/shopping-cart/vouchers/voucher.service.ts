import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {AppEndpoints} from '../../../../app-endpoints';
import {HttpService} from '../../../../core/http.service';
import {Voucher} from './voucher.model';

@Injectable()
export class VoucherService {

  constructor(private httpService: HttpService) {
  }

  readAll(): Observable<Voucher[]> {
    return this.httpService.get(AppEndpoints.VOUCHERS);
  }

  create(newVoucher: Voucher): Observable<Voucher> {
    return this.httpService.post(AppEndpoints.VOUCHERS, newVoucher);
  }
}
