import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {StockAlarmService} from '../stock-alarm.service';
import {StockAlarm} from '../stock-alarm.model';

@Component({
  selector: 'app-stock-alarm-search',
  templateUrl: './stock-alarm-search.component.html',
  styleUrls: ['./stock-alarm-search.component.css']
})
export class StockAlarmSearchComponent implements OnInit {
  stockAlarm: any;

  @Output() outer = new EventEmitter<StockAlarm>();

  constructor(private stockAlarmService: StockAlarmService) {
  }

  ngOnInit() {
  }

  searchWarning() {
    this.stockAlarmService.searchWarning().subscribe(result => {
      this.stockAlarm = result;
      this.outer.emit(this.stockAlarm);
    });
  }

  searchCritical() {
    this.stockAlarmService.searchCritical().subscribe(result => {
      this.stockAlarm = result;
      this.outer.emit(this.stockAlarm);
    });
  }

  resetSearch() {
    this.stockAlarmService.readAll().subscribe(result => {
      this.stockAlarm = result;
      this.outer.emit(this.stockAlarm);
    });
  }
}
