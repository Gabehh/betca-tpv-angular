import {Injectable} from '@angular/core';

import {HttpService} from './core/http.service';
import {Observable} from 'rxjs';
import {AppInfo} from './app-info.model';

@Injectable()
export class SystemService {
  static END_POINT = '/system';
  static APP_INFO = '/app-info';

  constructor(private httpService: HttpService) {
  }

  readVersion(): Observable<AppInfo> {
    return this.httpService.successful().get(SystemService.END_POINT + SystemService.APP_INFO);
  }
}
