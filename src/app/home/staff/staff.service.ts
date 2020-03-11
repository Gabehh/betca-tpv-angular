import { Injectable } from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable, of} from 'rxjs';
import {Staff} from '../staff/staff.model';
import {AppEndpoints} from '../../app-endpoints';
import {StockAlarm} from '../stock-alarm/stock-alarm.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  staffTest: Staff[] = [
    {
      id: 1,  mobile: 661,  month: '01',  day: '01',  workHours: 8,  lastLoginTime: new Date(2020, 1, 1, 9, 0, 0)
    },
    {
      id : 2, mobile: 662,  month: '01',  day: '01',  workHours: 8,  lastLoginTime: new Date(2020, 1, 1, 9, 0, 0)
    },
  ];


  constructor() { }
  // constructor(private httpService: HttpService) {
  // }
  // readAll(): Observable<User[]> {
  //   // return this.httpService.get(AppEndpoints.USERS);
  // }

  readAll(): Observable<Staff[]> {
    return of (this.staffTest);
  }

}
