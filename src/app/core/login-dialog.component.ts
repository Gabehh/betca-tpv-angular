import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material';

import {TokensService} from './tokens.service';
import {Staff} from '../home/staff/staff.model';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {StaffService} from '../home/staff/staff.service';


@Component({
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['dialog.component.css']
})
export class LoginDialogComponent {
  mobile: number;
  password: string;
  homeUrl: string;

  nowTime: Date;
  newMobile: number;
  staff: Staff;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private staffService: StaffService,
              private tokensService: TokensService, private router: Router) {
    this.homeUrl = data.homeUrl;
  }

  login() {
    this.tokensService.login(this.mobile, this.password).subscribe(
      () => this.router.navigate([this.homeUrl])
    );


    if ((typeof this.mobile) === 'string') {
      this.newMobile = Number(this.mobile);
    } else {
      this.newMobile = this.mobile;
    }
    console.log(this.newMobile);
    this.nowTime = new Date();
    if (isNotNullOrUndefined(
        this.staffService.findByMobileAndDate(
          this.newMobile,
          (this.nowTime.getMonth() + 1).toString(),
          this.nowTime.getDate().toString()
        )
      )
    ) {
      this.staff = {
        id : null,
        mobile: this.newMobile,
        month: (this.nowTime.getMonth() + 1).toString(),
        day: this.nowTime.getDate().toString(),
        workHours: null,
        lastLoginTime: this.nowTime,
      };
      this.staffService.updateLoginRecord(this.staff);
    } else {
      this.staff = {
        id : null,
        mobile: this.newMobile,
        month: (this.nowTime.getMonth() + 1).toString(),
        day: this.nowTime.getDate().toString(),
        workHours: null,
        lastLoginTime: this.nowTime,
      };
      this.staffService.createNewLoginRecord(this.staff);
      console.log(this.staffService.readAll());
    }
  }
}
