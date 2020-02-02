import {HttpService} from '../core/http.service';
import {Observable} from 'rxjs';
import {AppInfo} from './app-info.model';
import {Injectable} from '@angular/core';
import {AppEndpoints} from '../app-endpoints';

@Injectable()
export class SystemService {

  constructor(private httpService: HttpService) {
  }

  readVersion(): Observable<AppInfo> {
    return this.httpService.successful().get(AppEndpoints.SYSTEM_APP_INFO);
  }
}
