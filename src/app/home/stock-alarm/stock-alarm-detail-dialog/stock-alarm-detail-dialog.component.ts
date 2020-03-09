import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatTableDataSource} from '@angular/material';
import {FormControl, FormGroup } from '@angular/forms';
import {StockAlarm, AlarmArticle} from '../stock-alarm.model';

@Component({
  selector: 'app-stock-alarm-update-dialog',
  templateUrl: './stock-alarm-detail-dialog.component.html',
  styleUrls: ['./stock-alarm-detail-dialog.component.css']
})
export class StockAlarmDetailDialogComponent implements OnInit {
  stockAlarm: StockAlarm;
  stockAlarmFrom: FormGroup;
  title = 'Stock Alarm Article Detail';
  columns = ['articleId', 'warning', 'critical'];
  dataSource: MatTableDataSource<AlarmArticle>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.dataSource = this.data.alarm.article;
  }

  ngOnInit() {
    this.stockAlarmFrom = new FormGroup(
      {
        description: new FormControl(this.data.alarm.description),
        provider: new FormControl(this.data.alarm.provider),
        warning: new FormControl(this.data.alarm.warning),
        critical: new FormControl(this.data.alarm.critical)
      }
    );
  }
}
