import { Component, OnInit } from '@angular/core';
import {StaffService} from './staff.service';
import {Staff} from './staff.model';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})

export class StaffComponent {
  staff: Staff;
  month: string;
  title = 'Staff Attendance';
  columns = ['mobile', 'month', 'day', 'workHours'];
  data: Staff[];
  // private date: Date;


  constructor(private staffService: StaffService) {
    this.staff = {id: null, mobile: null, month: '', day: '', workHours: 0};
    this.data = null;
  }

  search() {
    // TODO implement search with fields
    this.staffService.readAll().subscribe(
      data => this.data = data
    );
  }

  resetSearch() {
    this.staff = {id : null, mobile: null, month: null, day: null, workHours: null};
  }


  create() {
    // TODO
  }

  read(user: Staff) {
    // TODO
  }

  update(user: Staff) {
    // TODO
  }

  delete(user: Staff) {
    // TODO
  }


}
