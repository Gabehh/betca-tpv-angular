import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatTableDataSource} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {AlarmArticle, StockAlarm, StockAlarmCreate} from '../stock-alarm.model';
import {ArticleService} from '../../shared/article.service';
import {StockAlarmService} from '../stock-alarm.service';


@Component({
  selector: 'app-stock-alarm-create-dialog',
  templateUrl: './stock-alarm-create-update.component.html',
  styleUrls: ['./stock-alarm-create-update.component.css']
})
export class StockAlarmCreateUpdateComponent implements OnInit {

  stockAlarm: StockAlarm;
  stockAlarmFrom: FormGroup;
  stockAlarmCreate: StockAlarmCreate;
  articleAlarmFrom: FormGroup;
  dialogMode: string;
  dataSource: MatTableDataSource<AlarmArticle>;
  displayedColumns = ['articleId', 'warning', 'critical', 'action'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog,
              public alarmService: StockAlarmService, public articleService: ArticleService) {
    this.dataSource = new MatTableDataSource<AlarmArticle>(this.data.alarm.article);
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
      ? this.create(this.stockAlarmFrom)
      : this.update(this.stockAlarmFrom);
  }

  create(stockAlarmFrom: FormGroup) {
    this.stockAlarmCreate = {
      description: stockAlarmFrom.controls.description.value,
      provider: stockAlarmFrom.controls.provider.value,
      warning: stockAlarmFrom.controls.warning.value,
      critical: stockAlarmFrom.controls.critical.value,
      article : this.dataSource.data
    };
    this.alarmService.create(this.stockAlarmCreate).subscribe(result => {
      console.log(result);
    });
  }

  update(stockAlarmFrom: FormGroup) {
    this.stockAlarmCreate = {
      description: stockAlarmFrom.controls.description.value,
      provider: stockAlarmFrom.controls.provider.value,
      warning: stockAlarmFrom.controls.warning.value,
      critical: stockAlarmFrom.controls.critical.value,
      article : this.dataSource.data
    };
    this.alarmService.update(this.stockAlarmCreate).subscribe(result => {
      console.log(result);
    });
  }

  addArticle(articleAlarmFrom: FormGroup) {
    this.articleService.readOne(articleAlarmFrom.controls.articleId.value).subscribe(
      result => {
        const repeat = this.dataSource.data.some(item => {
          if (item.articleId === Number(result.code)) {
            return true;
          }
        });
        if (repeat) {
          console.log('exist');
        } else {
          this.dataSource.data.push(articleAlarmFrom.value);
          this.dataSource = new MatTableDataSource(this.dataSource.data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete(alarmArticle) {
    const i = this.dataSource.data.indexOf(alarmArticle);
    this.dataSource.data.splice(i, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
}
