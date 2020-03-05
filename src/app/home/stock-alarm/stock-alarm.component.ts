import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogConfig } from '@angular/material';
import {StockAlarm} from './stock-alarm.model';
import {StockAlarmCreateDialogComponent} from './stock-alarm-create-dialog/stock-alarm-create-dialog.component';
import {StockAlarmUpdateDialogComponent} from './stock-alarm-update-dialog/stock-alarm-update-dialog.component';
import {CancelYesDialogComponent} from '../../core/cancel-yes-dialog.component';

@Component({
  selector: 'app-stock-alarm',
  templateUrl: './stock-alarm.component.html',
  styleUrls: ['./stock-alarm.component.css']
})
export class StockAlarmComponent implements OnInit {

  stockAlarm: StockAlarm;
  title = 'Stock Alarm Management';
  columns = ['id', 'Description', 'Article', 'provider', 'Warning', 'Critical'];
  data: StockAlarm[] = [{  id : '10', Description: 'string', Article: 'string', warning: 12,
    critical: 2}];
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
    this.dialog.open(StockAlarmUpdateDialogComponent).afterClosed().subscribe(result => {
      console.log('Update');
    });
  }

  delete(alarm: StockAlarm) {
    this.dialog.open(CancelYesDialogComponent, this.dialogConfig).afterClosed().subscribe(
      result => {
        if (result) {
          console.log('Delete');
        }
      }
    );
  }
}
