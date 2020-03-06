import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {AppEndpoints} from '../../../../app-endpoints';
import {HttpService} from '../../../../core/http.service';
import {Voucher} from './voucher.model';
import {SearchVoucher} from './voucher-search.model';

@Injectable()
export class VoucherService {

  constructor(private httpService: HttpService) {
  }

  readAll(): Observable<Voucher[]> {
    return this.httpService.get(AppEndpoints.VOUCHERS);
  }

  search(searchVoucher: SearchVoucher): Observable<Voucher[]> {
    return this.httpService.param('id', searchVoucher.id)
                           .param('firstDate', searchVoucher.firstDate.toString())
                           .param('finalDate', searchVoucher.finalDate.toString())
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
}
