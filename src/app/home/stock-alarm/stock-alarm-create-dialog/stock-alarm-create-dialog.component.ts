import { Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import {FormControl, FormGroup } from '@angular/forms';
import {StockAlarm} from '../stock-alarm.model';

@Component({
  selector: 'app-stock-alarm-create-dialog',
  templateUrl: './stock-alarm-create-dialog.component.html',
  styleUrls: ['./stock-alarm-create-dialog.component.css']
})
export class StockAlarmCreateDialogComponent implements OnInit {

  stockAlarm: StockAlarm;
  stockAlarmFrom: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.stockAlarmFrom = new FormGroup(
      {
        id: new FormControl(''),
        Description : new FormControl(''),
        Article: new FormControl(''),
        provider: new FormControl(''),
        warning: new FormControl(''),
        critical: new FormControl('')
      }
    );
  }

  create(createForm: FormGroup) {
    const idStock = createForm.value;
    console.log(idStock);
  }
}
