import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stock-alarm-search',
  templateUrl: './stock-alarm-search.component.html',
  styleUrls: ['./stock-alarm-search.component.css']
})
export class StockAlarmSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  searchWarning() {
    console.log('search Warning');
  }

  searchCritical() {
    console.log('search Critical');
  }

  resetSearch() {
    console.log('reset Search');
  }
}
