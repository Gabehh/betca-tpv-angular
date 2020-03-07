import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {AppEndpoints} from '../../app-endpoints';
import {HttpService} from '../../core/http.service';
import {Voucher} from '../cashier-opened/shopping-cart/vouchers/voucher.model';
import {SearchVoucher} from '../cashier-opened/shopping-cart/vouchers/voucher-search.model';

@Injectable()
export class VoucherService {

  constructor(private httpService: HttpService) {
  }

  search(searchVoucher: SearchVoucher): Observable<Voucher[]> {
    return this.httpService.param('id', searchVoucher.id)
        .param('firstDate', searchVoucher.firstDate.toISOString())
        .param('finalDate', searchVoucher.finalDate.toISOString())
        .get(AppEndpoints.VOUCHERS);
  }

  create(voucher: Voucher): Observable<Voucher> {
    return this.httpService.post(AppEndpoints.VOUCHERS, voucher);
  }

  consume(voucher: Voucher): Observable<Voucher> {
    return this.httpService.put(AppEndpoints.VOUCHERS + '/' + voucher.id);
  }

  print(voucher: Voucher): Observable<Voucher> {
    return this.httpService.pdf().get(AppEndpoints.VOUCHERS + '/' + voucher.id + AppEndpoints.PRINT);
  }

  createAndPrint(value: number): Observable<Voucher> {
    return this.httpService.pdf().post(AppEndpoints.VOUCHERS + AppEndpoints.PRINT, {value});
  }
}
