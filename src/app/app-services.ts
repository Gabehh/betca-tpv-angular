import {AdminsService} from './home/admins.service';
import {ArticleService} from './home/shared/article.service';
import {CashierClosureService} from './home/cashier-opened/cashier-closure/cashier-closure.service';
import {CashierService} from './home/shared/cashier.service';
import {ShoppingCartService} from './home/cashier-opened/shopping-cart/shopping-cart.service';
import {SystemService} from './home/system.service';
import {UserService} from './home/users/user.service';
import {VoucherService} from './home/cashier-opened/shopping-cart/vouchers/voucher.service';
import {AdvancedArticlesSearchService} from './home/cashier-opened/advanced-search/advanced-articles-search.service';

export class AppServices {
  public static SERVICES = [
    AdminsService,
    ArticleService,
    AdvancedArticlesSearchService,
    CashierClosureService,
    CashierService,
    ShoppingCartService,
    SystemService,
    UserService,
    VoucherService,
  ];
}
