import {AdminsService} from './home/admins.service';
import {ArticleService} from './home/shared/article.service';
import {CashierClosureService} from './home/cashier-opened/cashier-closure/cashier-closure.service';
import {CashierService} from './home/shared/cashier.service';
import {ShoppingCartService} from './home/cashier-opened/shopping-cart/shopping-cart.service';
import {SystemService} from './home/system.service';
import {UserService} from './home/users/user.service';
import {VoucherService} from './home/shared/voucher.service';
import {AdvancedArticlesSearchService} from './home/cashier-opened/advanced-search/advanced-articles-search.service';
import {ArticlesFamilyViewService} from './home/cashier-opened/articles-family/articles-family-view.service';
import {OrderService} from './home/orders/order.service';
import {ProviderService} from './home/providers/provider.service';
import {SendingsService} from './home/sendings/sendings.service';
import {InvoiceService} from './home/shared/invoice/invoice.service';

export class AppServices {
  public static SERVICES = [
    AdminsService,
    ArticleService,
    AdvancedArticlesSearchService,
    CashierClosureService,
    CashierService,
    OrderService,
    ShoppingCartService,
    SystemService,
    UserService,
    VoucherService,
    ProviderService,
    ArticlesFamilyViewService,
    SendingsService,
    InvoiceService
  ];
}
