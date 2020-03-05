import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import {FormControl, FormGroup } from '@angular/forms';
import {StockAlarm} from '../stock-alarm.model';

@Component({
  selector: 'app-stock-alarm-update-dialog',
  templateUrl: './stock-alarm-update-dialog.component.html',
  styleUrls: ['./stock-alarm-update-dialog.component.css']
})
export class StockAlarmUpdateDialogComponent implements OnInit {
  stockAlarm: StockAlarm;
  stockAlarmFrom: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

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

  update(updateForm: FormGroup) {
    const idStock = updateForm.value;
    console.log(idStock);
  }
}


