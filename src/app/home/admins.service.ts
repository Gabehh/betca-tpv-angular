import {Injectable} from '@angular/core';

import {AppEndpoints} from '../app-endpoints';
import {HttpService} from '../core/http.service';


@Injectable()
export class AdminsService {

  constructor(private httpService: HttpService) {
  }

  deleteDb(): void {
    this.httpService.successful().delete(AppEndpoints.ADMINS_DB)
      .subscribe(() => {
      });
  }

  seedDb(): void {
    this.httpService.successful().post(AppEndpoints.ADMINS_DB)
      .subscribe(() => {
      });
  }

}
