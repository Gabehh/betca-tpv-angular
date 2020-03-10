import {Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {StockAlarm, StockAlarmCreate} from './stock-alarm.model';


@Injectable({
  providedIn: 'root'
})
export class StockAlarmService {

  stockAlarmTest: StockAlarm[] = [
    {  id : '1111', description: '1111', provider: 'string', warning: 11, critical: 11,
      article: [
        {articleId: 111111111, warning: 1, critical: 1},
        {articleId: 111222222, warning: 2, critical: 2}
      ]
    },
    {  id : '2222', description: '2222', provider: 'string', warning: 22, critical: 22,
      article: [
        {articleId: 111111111, warning: 5, critical: 5},
        {articleId: 222222222, warning: 6, critical: 6}
      ]
    },
  ];
  stockWarning: StockAlarm = {  id : '1', description: 'Warning',
    article: [
      {articleId: 111111111, warning: 5, critical: 5},
      {articleId: 222222222, warning: 6, critical: 6}
    ]
  };
  stockCritical: StockAlarm = {  id : '1', description: 'Critical',
    article: [
      {articleId: 333333333, warning: 5, critical: 5},
      {articleId: 333333333, warning: 6, critical: 6},
      {articleId: 333333333, warning: 5, critical: 5},
      {articleId: 333333333, warning: 6, critical: 6},
    ]
  };
  constructor() { }
  readAll(): Observable<StockAlarm[]> {
    return of (this.stockAlarmTest);
  }
  create(stockAlarmCreate: StockAlarmCreate): Observable<StockAlarmCreate> {
    return of (stockAlarmCreate);
  }
  update(stockAlarmCreate: StockAlarmCreate): Observable<StockAlarmCreate> {
    return of (stockAlarmCreate);
  }
  delete(stockAlarm: StockAlarm): Observable<StockAlarm> {
    return of(stockAlarm);
  }
  searchWarning(): Observable<StockAlarm> {
    return of(this.stockWarning);
  }
  searchCritical(): Observable<StockAlarm> {
    return of(this.stockCritical);
  }
}
