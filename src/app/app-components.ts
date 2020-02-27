import {AdvancedArticlesSearchComponent} from './home/cashier-opened/advanced-search/advanced-articles-search.component';
import {ArticlesFamilyViewComponent} from './home/cashier-opened/articles-family/articles-family-view.component';
import {CashierClosedComponent} from './home/cashier-closed/cashier-closed.component';
import {CashierOpenedComponent} from './home/cashier-opened/cashier-opened.component';
import {HomeComponent} from './home/home.component';
import {ShoppingCartComponent} from './home/cashier-opened/shopping-cart/shopping-cart.component';
import {UsersComponent} from './home/users/users.component';
import {WelcomeComponent} from './welcome.component';
import {ArticleQuickCreationDialogComponent} from './home/cashier-opened/shopping-cart/article-quick-creation-dialog.component';
import {CashierClosureDialogComponent} from './home/cashier-opened/cashier-closure/cashier-closure-dialog.component';
import {CheckOutDialogComponent} from './home/cashier-opened/shopping-cart/check-out-dialog.component';
import {CashMovementsDialogComponent} from './home/cashier-opened/cashier-closure/cash-movements/cash-movements-dialog.component';
import {ProvidersComponent} from './home/providers/providers.component';

export class AppComponents {
  static COMPONENTS = [
    AdvancedArticlesSearchComponent,
    ArticlesFamilyViewComponent,
    CashierClosedComponent,
    CashierOpenedComponent,
    HomeComponent,
    ShoppingCartComponent,
    UsersComponent,
    WelcomeComponent,
    ProvidersComponent
  ];

  static DIALOGS = [
    ArticleQuickCreationDialogComponent,
    CashierClosureDialogComponent,
    CashMovementsDialogComponent,
    CheckOutDialogComponent,
  ];
}
