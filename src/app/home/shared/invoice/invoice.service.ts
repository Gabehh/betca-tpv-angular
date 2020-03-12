import {Injectable} from '@angular/core';
import {HttpService} from '../../../core/http.service';
import {Observable} from 'rxjs';
import {AppEndpoints} from '../../../app-endpoints';
import {Invoice} from './invoice.model';
import {InvoiceFilter} from './invoice-filters.model';

@Injectable()
export class InvoiceService {

  constructor(private httpService: HttpService) {
  }

  create(): Observable<any> {
    return this.httpService.pdf().post(AppEndpoints.INVOICES);
  }

  readAll(): Observable<Invoice[]> {
    return this.httpService.get(AppEndpoints.INVOICES);
  }

  search(filter: InvoiceFilter): Observable<Invoice[]> {
    return this.httpService
      .param('mobile', filter.mobile ? filter.mobile.toString() : null)
      .param('fromDate', filter.fromDate ? filter.fromDate.getTime().toString() : null)
      .param('toDate', filter.toDate ? filter.toDate.getTime().toString() : null)
      .get(AppEndpoints.INVOICES);
  }
}



