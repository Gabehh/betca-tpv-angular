import {AdvancedArticlesSearchComponent} from './home/cashier-opened/advanced-search/advanced-articles-search.component';
import {ArticlesFamilyViewComponent} from './home/cashier-opened/articles-family/articles-family-view.component';
import {CashierClosedComponent} from './home/cashier-closed/cashier-closed.component';
import {CashierOpenedComponent} from './home/cashier-opened/cashier-opened.component';
import {HomeComponent} from './home/home.component';
import {ShoppingCartComponent} from './home/cashier-opened/shopping-cart/shopping-cart.component';
import {UsersComponent} from './home/users/users.component';
import {StaffComponent} from './home/staff/staff.component';
import {WelcomeComponent} from './welcome.component';
import {ArticleQuickCreationDialogComponent} from './home/cashier-opened/shopping-cart/article-quick-creation-dialog.component';
import {CashierClosureDialogComponent} from './home/cashier-opened/cashier-closure/cashier-closure-dialog.component';
import {CheckOutDialogComponent} from './home/cashier-opened/shopping-cart/check-out-dialog.component';
import {CashierClosureSearchComponent} from './home/cashier-opened/cashier-closure/search/cashier-closure-search.component';
import {CustomerDiscountComponent} from './home/customer-discount/customer-discount.component';
import {ArticlesAdminComponent} from './home/articles/articles-admin.component';
import {VouchersComponent} from './home/cashier-opened/shopping-cart/vouchers/vouchers.component';
import {CashMovementsDialogComponent} from './home/cashier-opened/cashier-closure/cash-movements/cash-movements-dialog.component';
import {ProvidersComponent} from './home/providers/providers.component';
import {ProvidersDropdownComponent} from './home/shared/providers-dropdown.component';
import {OrdersComponent} from './home/orders/orders.component';
import {VoucherCreationDialogComponent} from './home/cashier-opened/shopping-cart/vouchers/voucher-creation-dialog.component';
import {SendingsComponent} from './home/sendings/sendings.component';
import {StockAlarmComponent} from './home/stock-alarm/stock-alarm.component';
import {StockAlarmSearchComponent} from './home/stock-alarm/stock-alarm-search/stock-alarm-search.component';
import {StockAlarmCreateUpdateComponent} from './home/stock-alarm/stock-alarm-create-update/stock-alarm-create-update.component';
import {StockAlarmDetailDialogComponent} from './home/stock-alarm/stock-alarm-detail-dialog/stock-alarm-detail-dialog.component';
import {ProviderCreationDialogComponent} from './home/providers/provider-creation-dialog.component';
import {OrderCreationDialogComponent} from './home/orders/order-creation-dialog.component';
import {ArticlesCreationDialogComponent} from './home/articles/articles-creation-dialog.component';
import {VoucherPrintDialogComponent} from './home/cashier-opened/shopping-cart/vouchers/voucher-print-dialog.component';
import {ArticlesDetailDialogComponent} from './home/articles/articles-detail-dialog.component';
import {OrderDetailDialogComponent} from './home/orders/order-detail-dialog.component';
import {OrderEditionDialogComponent} from './home/orders/order-edition-dialog.component';
import {CheckOutDialogVoucherComponent} from './home/cashier-opened/shopping-cart/check-out-dialog-voucher.component';
import {SendingsCreationDialogComponent} from './home/sendings/sendings-creation-dialog.component';
import {InvoicesComponent} from './home/invoices/invoices.component';
import {BudgetDialogComponent} from './home/cashier-opened/shopping-cart/budget-dialog.component';
import {ProviderDetailDialogComponent} from './home/providers/provider-detail-dialog.component';

export class AppComponents {
  static COMPONENTS = [
    AdvancedArticlesSearchComponent,
    ArticlesFamilyViewComponent,
    CashierClosedComponent,
    CashierOpenedComponent,
    CustomerDiscountComponent,
    HomeComponent,
    OrdersComponent,
    ShoppingCartComponent,
    StockAlarmComponent,
    StockAlarmSearchComponent,
    UsersComponent,
    StaffComponent,
    WelcomeComponent,
    VouchersComponent,
    ProvidersComponent,
    CashierClosureSearchComponent,
    ArticlesAdminComponent,
    ProvidersDropdownComponent,
    SendingsComponent,
    InvoicesComponent
  ];

  static DIALOGS = [
    ArticleQuickCreationDialogComponent,
    CashierClosureDialogComponent,
    VoucherCreationDialogComponent,
    VoucherPrintDialogComponent,
    CashMovementsDialogComponent,
    CheckOutDialogComponent,
    BudgetDialogComponent,
    CheckOutDialogVoucherComponent,
    OrderCreationDialogComponent,
    OrderEditionDialogComponent,
    OrderDetailDialogComponent,
    ProviderCreationDialogComponent,
    ArticlesCreationDialogComponent,
    StockAlarmCreateUpdateComponent,
    StockAlarmDetailDialogComponent,
    ArticlesDetailDialogComponent,
    SendingsCreationDialogComponent,
    ProviderDetailDialogComponent
  ];
}
