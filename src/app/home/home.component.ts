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

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],

})
export class HomeComponent {
  backend: string;

  cashierClosed: boolean;
  username: string;

  constructor(private router: Router, private dialog: MatDialog, private httpService: HttpService,
              private tokensService: TokensService, private userService: UserService, private cashierService: CashierService,
              private adminsService: AdminsService, private systemService: SystemService) {
    systemService.readVersion().subscribe(
      appInfo => this.backend = appInfo.version + '(' + appInfo.profile + ')'
    );
    this.username = tokensService.getName();
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
            this.router.navigate(['home', 'cashier-opened']);
          } else {
            this.router.navigate(['home', 'cashier-closed']);
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

}
