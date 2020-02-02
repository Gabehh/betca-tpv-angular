import {HttpService} from '../core/http.service';
import {Observable} from 'rxjs';
import {AppInfo} from '../app-info.model';
import {Injectable} from '@angular/core';

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
