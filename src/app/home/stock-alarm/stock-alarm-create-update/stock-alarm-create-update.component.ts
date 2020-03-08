import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatTableDataSource} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {StockAlarm, AlarmArticle} from '../stock-alarm.model';

@Component({
  selector: 'app-stock-alarm-create-dialog',
  templateUrl: './stock-alarm-create-update.component.html',
  styleUrls: ['./stock-alarm-create-update.component.css']
})
export class StockAlarmCreateUpdateComponent implements OnInit {

  stockAlarm: StockAlarm;
  stockAlarmFrom: FormGroup;
  articleAlarmFrom: FormGroup;
  dialogMode: string;
  dataSource: MatTableDataSource<AlarmArticle>;
  displayedColumns = ['articleId', 'warning', 'critical', 'action'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.dataSource = this.data.alarm.article;
    this.dialogMode = this.data.dialogMode;
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
    this.articleAlarmFrom = new FormGroup(
      {
        articleId: new FormControl(''),
        warning: new FormControl(''),
        critical: new FormControl('')
      }
    );
  }

  createOrUpdate() {
    this.data.dialogMode === 'create'
      ? this.create(this.stockAlarmFrom, this.articleAlarmFrom)
      : this.update(this.stockAlarmFrom, this.articleAlarmFrom);
  }

  create(stockAlarmFrom: FormGroup, articleAlarmFrom: FormGroup) {
    console.log(stockAlarmFrom.value, articleAlarmFrom.value);
  }

  update(stockAlarmFrom: FormGroup, articleAlarmFrom: FormGroup) {
    console.log(stockAlarmFrom.value, articleAlarmFrom.value);
  }

  delete(alarmArticle) {
    console.log(alarmArticle.value);
  }

  addArticle(articleAlarmFrom: FormGroup) {
    console.log(articleAlarmFrom.value);
  }
}
