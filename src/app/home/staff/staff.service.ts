import { Injectable } from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable, of} from 'rxjs';
import {Staff} from '../staff/staff.model';
import {AppEndpoints} from '../../app-endpoints';
import {StockAlarm} from '../stock-alarm/stock-alarm.model';
import {Order} from '../orders/order.model';

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
  //
  // findByMobile(mobile: number): Observable<Staff> {
  //   for (let i = 0; i < this.staffTest.length; i++) {
  //     let data = this.staffTest[i];
  //     if (data.mobile === mobile) {
  //       return of(data);
  //     }
  //   }
  // }

  createNewLoginRecord(newLoginRecord: Staff): Observable<Staff> {
    const staff: Staff = {
      id: this.staffTest.length + 1,
      mobile: newLoginRecord.mobile,
      month: newLoginRecord.month,
      day: newLoginRecord.day,
      workHours: newLoginRecord.workHours,
      lastLoginTime: newLoginRecord.lastLoginTime,
    };
    this.staffTest.push(staff);
    return of(staff);
  }

  updateLoginRecord(newLoginRecord: Staff): Observable<Staff> {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.staffTest.length; i++) {
      const data = this.staffTest[i];
      if (data.mobile === newLoginRecord.mobile) {
        data.workHours = newLoginRecord.workHours;
        data.lastLoginTime = newLoginRecord.lastLoginTime;
        return of(data);
      } else {
        return null;
      }
    }
  }
}
