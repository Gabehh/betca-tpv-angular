import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CashierClosedComponent} from './home/cashier-closed/cashier-closed.component';
import {CashierOpenedComponent} from './home/cashier-opened/cashier-opened.component';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './home/users/users.component';
import {WelcomeComponent} from './welcome.component';
import {CashierClosureSearchComponent} from './home/cashier-opened/cashier-closure/search/cashier-closure-search.component';
import {ArticlesAdminComponent} from './home/articles/articles-admin.component';
import {VouchersComponent} from './home/cashier-opened/shopping-cart/vouchers/vouchers.component';
import {ProvidersComponent} from './home/providers/providers.component';
import {OrdersComponent} from './home/orders/orders.component';
import {SendingsComponent} from './home/sendings/sendings.component';
import {StockAlarmComponent} from './home/stock-alarm/stock-alarm.component';
import {CustomerDiscountComponent} from './home/customer-discount/customer-discount.component';
import {InvoicesComponent} from './home/invoices/invoices.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'welcome'},
  {path: 'welcome', component: WelcomeComponent},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'articles', component: ArticlesAdminComponent},
      {path: 'cashier-closed', component: CashierClosedComponent},
      {path: 'cashier-opened', component: CashierOpenedComponent},
      {path: 'cashier-closure-search', component: CashierClosureSearchComponent},
      {path: 'customer-discount', component: CustomerDiscountComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'providers', component: ProvidersComponent},
      {path: 'users', component: UsersComponent},
      {path: 'vouchers', component: VouchersComponent},
      {path: 'sendings', component: SendingsComponent},
      {path: 'stock-alarm', component: StockAlarmComponent},
      {path: 'invoices', component: InvoicesComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
