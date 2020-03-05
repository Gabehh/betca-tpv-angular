import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogConfig } from '@angular/material';
import {StockAlarm} from './stock-alarm.model';
import {StockAlarmCreateDialogComponent} from './stock-alarm-create-dialog/stock-alarm-create-dialog.component';

@Component({
  selector: 'app-stock-alarm',
  templateUrl: './stock-alarm.component.html',
  styleUrls: ['./stock-alarm.component.css']
})
export class StockAlarmComponent implements OnInit {

  stockAlarm: StockAlarm;
  title = 'Stock Alarm Management';
  columns = ['id', 'Description', 'Article', 'provider', 'Warning', 'Critical'];
  data: StockAlarm[];
  dialogConfig: MatDialogConfig;

  constructor(private dialog: MatDialog ) { }

  ngOnInit() {
  }

  create() {
    this.dialog.open(StockAlarmCreateDialogComponent).afterClosed().subscribe(result => {
      console.log('Create');
    });
  }

  update(alarm: StockAlarm) {
    console.log('update');
  }

  delete(alarm: StockAlarm) {
    console.log('delete');
  }
}
