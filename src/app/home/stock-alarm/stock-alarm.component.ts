import { Component, OnInit } from '@angular/core';
import {StockAlarm} from './stock-alarm.model';

@Component({
  selector: 'app-stock-alarm',
  templateUrl: './stock-alarm.component.html',
  styleUrls: ['./stock-alarm.component.css']
})
export class StockAlarmComponent implements OnInit {

  alarm: StockAlarm;
  title = 'Stock Alarm Management';
  columns = ['id', 'Description', 'Article', 'provider', 'Warning', 'Critical'];
  data: StockAlarm[];

  constructor() { }

  ngOnInit() {
  }

  create() {
    console.log('create');
  }

  update(alarm: StockAlarm) {
    console.log('update');
  }

  delete(alarm: StockAlarm) {
    console.log('delete');
  }
}
