import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {map} from 'rxjs/operators';

import {AppEndpoints} from '../app-endpoints';
import {HttpService} from '../core/http.service';
import {TokensService} from '../core/tokens.service';
import {CancelYesDialogComponent} from '../core/cancel-yes-dialog.component';
import {CashierService} from './shared/cashier.service';
import {AdminsService} from './admins.service';
import {UserService} from './users/user.service';
import {SystemService} from './system.service';
import {CashierClosureDialogComponent} from './cashier-opened/cashier-closure/cashier-closure-dialog.component';
import {CashMovementsDialogComponent} from './cashier-opened/cashier-closure/cash-movements/cash-movements-dialog.component';
import {Staff} from './staff/staff.model';
import {StaffService} from './staff/staff.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],

})
export class HomeComponent {
  backend: string;

  cashierClosed: boolean;
  username: string;
  mobile: number;

  nowTime: Date;
  staff: Staff;
  oldRecord: Staff;

  constructor(private router: Router, private dialog: MatDialog, private httpService: HttpService,
              private staffService: StaffService,
              private tokensService: TokensService, private userService: UserService, private cashierService: CashierService,
              private adminsService: AdminsService, private systemService: SystemService) {
    systemService.readVersion().subscribe(
      appInfo => this.backend = appInfo.version + '(' + appInfo.profile + ')'
    );
    this.username = tokensService.getName();
    this.mobile = tokensService.getMobile();
    this.cashierClosed = true;
    this.cashier();
  }

  isAdmin(): boolean {
    return this.tokensService.isAdmin();
  }

  isManager(): boolean {
    return this.tokensService.isManager();
  }

  cashier() {
    this.cashierService.readLast()
      .pipe(map(cashierLast => cashierLast.closed))
      .subscribe(
        closed => {
          this.cashierClosed = closed;
          if (closed) {
            this.router.navigate(['home', 'cashier-closed']);
          } else {
            this.router.navigate(['home', 'cashier-opened']);
          }
        }
      );
  }

  deleteDb() {
    this.dialog.open(CancelYesDialogComponent).afterClosed().subscribe(
      result => {
        if (result) {
          this.adminsService.deleteDb();
        }
      });
  }

  seedDb() {
    this.adminsService.seedDb();
  }

  logout() {
    this.tokensService.logout();

    this.nowTime = new Date();
    this.staffService
      .findByMobileAndDate(Number(this.mobile), (this.nowTime.getMonth() + 1).toString(), this.nowTime.getDate().toString())
      .subscribe(
      data  => this.oldRecord = data
    );
    console.log(this.oldRecord);
    this.staff =  {
      id : null,
      mobile: Number(this.mobile),
      month: (this.nowTime.getMonth() + 1).toString(),
      day: this.nowTime.getDate().toString(),
      workHours: this.nowTime.getHours() - this.oldRecord.lastLoginTime.getHours() +
        (this.nowTime.getMinutes() - this.oldRecord.lastLoginTime.getMinutes()) / 60 +
        (this.nowTime.getSeconds() - this.oldRecord.lastLoginTime.getSeconds()) / 3600,
      lastLoginTime: this.nowTime
    };
    this.staffService.updateLoginRecord(this.staff);
    console.log(this.staffService.readAll());
  }

  closeCashier() {
    this.dialog.open(CashierClosureDialogComponent).afterClosed().subscribe(
      () => this.cashier()
    );
  }

  openCashier() {
    this.httpService.post(AppEndpoints.CASHIER_CLOSURES).subscribe(
      () => this.cashier()
    );
  }

  moveCash() {
    this.dialog.open(CashMovementsDialogComponent).afterClosed().subscribe(
      () => this.cashier()
    );
  }

}
