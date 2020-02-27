import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CashierClosedComponent} from './home/cashier-closed/cashier-closed.component';
import {CashierOpenedComponent} from './home/cashier-opened/cashier-opened.component';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './home/users/users.component';
import {WelcomeComponent} from './welcome.component';
import {CashierClosureSearchComponent} from './home/cashier-opened/cashier-closure/cashier-closure-search.component';
import {ArticlesAdminComponent} from './home/articles/articles-admin.component';
import {VouchersComponent} from './home/cashier-opened/shopping-cart/vouchers/vouchers.component';
import {ProvidersComponent} from './home/providers/providers.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'welcome'},
  {path: 'welcome', component: WelcomeComponent},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'cashier-closed', component: CashierClosedComponent},
      {path: 'cashier-opened', component: CashierOpenedComponent},
      {path: 'users', component: UsersComponent},
      {path: 'cashier-closure-search', component: CashierClosureSearchComponent},
      {path: 'articles', component: ArticlesAdminComponent},
      {path: 'vouchers', component: VouchersComponent},
      {path: 'users', component: UsersComponent},
      {path: 'providers', component: ProvidersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
