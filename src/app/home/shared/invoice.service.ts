import {Injectable} from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable} from 'rxjs';
import {AppEndpoints} from '../../app-endpoints';

@Injectable()
export class InvoiceService {

  constructor(private httpService: HttpService) {
  }

  create(): Observable<any> {
    return this.httpService.pdf().post(AppEndpoints.INVOICES);
  }
}


