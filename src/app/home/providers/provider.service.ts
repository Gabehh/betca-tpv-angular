import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {AppEndpoints} from '../../app-endpoints';
import {HttpService} from '../../core/http.service';
import {Provider} from '../shared/provider.model';
import {ProviderSearch} from './provider-search.model';

@Injectable()
export class ProviderService {

  constructor(private httpService: HttpService) {
  }

  search(providerSearch: ProviderSearch): Observable<Provider[]> {
    return this.httpService.param('company', providerSearch.company)
      .param('nif', providerSearch.nif.toString())
      .param('phone', providerSearch.phone.toString())
      .get(AppEndpoints.PROVIDERS);
  }

  readAll(): Observable<Provider[]> {
    return this.httpService.get(AppEndpoints.PROVIDERS);
  }

  create(provider: Provider): Observable<Provider> {
    return this.httpService.post(AppEndpoints.PROVIDERS, provider);
  }
}
