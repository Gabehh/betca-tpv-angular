import {Injectable} from '@angular/core';
import {BehaviorSubject, concat, EMPTY, iif, merge, Observable, Subject} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {HttpService} from '../../../core/http.service';
import {ArticleService} from '../../shared/article.service';
import {Article} from '../../shared/article.model';
import {Shopping} from './shopping.model';
import {TicketCreation} from './ticket-creation.model';

import {AppEndpoints} from '../../../app-endpoints';
import {ArticleQuickCreationDialogComponent} from './article-quick-creation-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable()
export class ShoppingCartService {

  static ARTICLE_VARIOUS = '1';
  static SHOPPING_CART_NUM = 4;

  private indexShoppingCart = 0;
  private shoppingCart: Array<Shopping>;
  private totalShoppingCart = 0;
  private shoppingCartList: Array<Array<Shopping>> = [];
  private shoppingCartSubject: Subject<Shopping[]> = new BehaviorSubject(undefined); // refresh auto
  private lastArticle: Article;

  constructor(private dialog: MatDialog, private articleService: ArticleService, private httpService: HttpService) {
    for (let i = 0; i < ShoppingCartService.SHOPPING_CART_NUM; i++) {
      this.shoppingCartList.push([]);
    }
    this.shoppingCart = this.shoppingCartList[this.indexShoppingCart];
  }

  static isArticleVarious(code: string): boolean {
    return code === ShoppingCartService.ARTICLE_VARIOUS;
  }

  shoppingCartObservable(): Observable<Shopping[]> {
    return this.shoppingCartSubject.asObservable();
  }

  getIndexShoppingCart(): number {
    return this.indexShoppingCart + 1;
  }

  getTotalShoppingCart() {
    return this.totalShoppingCart;
  }

  getLastArticle(): Article {
    return this.lastArticle;
  }

  synchronizeCartTotal(): void {
    let total = 0;
    for (const shopping of this.shoppingCart) {
      total = total + shopping.total;
    }
    this.totalShoppingCart = Math.round(total * 100) / 100;
  }

  getTotalCommitted(): number {
    let total = 0;
    for (const shopping of this.shoppingCart) {
      if (shopping.committed) {
        total += shopping.total;
      }
    }
    return Math.round(total * 100) / 100;
  }

  unCommitArticlesExist(): boolean {
    for (const shopping of this.shoppingCart) {
      if (!shopping.committed && shopping.amount > 0) {
        return true;
      }
    }
    return false;
  }

  delete(shopping: Shopping): void {
    const index = this.shoppingCart.indexOf(shopping);
    if (index > -1) {
      this.shoppingCart.splice(index, 1);
    }
    this.synchronizeAll();
  }

  add(codeValue: string): Observable<any> {
    let price: number = Number(codeValue.replace(',', '.'));
    if (!Number.isNaN(price) && codeValue.length <= 5) {
      codeValue = ShoppingCartService.ARTICLE_VARIOUS;
    } else {
      price = undefined;
    }
    return this.articleService.readOne(codeValue).pipe(
      map(
        (article: Article) => {
          this.addArticle(article, price);
        }), catchError(() => {
        const dialogRef = this.dialog.open(ArticleQuickCreationDialogComponent);
        dialogRef.componentInstance.article = {code: codeValue, description: undefined, retailPrice: undefined};
        dialogRef.afterClosed().subscribe(
          newArticle => {
            if (newArticle) {
              this.addArticle(newArticle);
            }
          }
        );
        return EMPTY;
      })
    );
  }

  exchange(): void {
    this.shoppingCartList[this.indexShoppingCart++] = this.shoppingCart;
    this.indexShoppingCart %= ShoppingCartService.SHOPPING_CART_NUM;
    this.shoppingCart = this.shoppingCartList[this.indexShoppingCart];
    this.synchronizeAll();
  }

  checkOut(ticketCreation: TicketCreation, voucher: number, requestedInvoice: boolean, requestedGiftTicket): Observable<any> {
    ticketCreation.shoppingCart = this.shoppingCart;
    const ticket = this.httpService.pdf().post(AppEndpoints.TICKETS, ticketCreation).pipe(
      map(() => this.reset())
    );
    let receipts = iif(() => voucher > 0, EMPTY); // TODO change EMPTY to create voucher
    receipts = iif(() => requestedInvoice, merge(receipts, EMPTY), receipts); // TODO change EMPTY to create invoice
    receipts = iif(() => requestedGiftTicket, merge(receipts, EMPTY), receipts); // TODO change EMPTY to create gift ticket
    return concat(ticket, receipts);
  }

  isEmpty(): boolean {
    return (!this.shoppingCart || this.shoppingCart.length === 0);
  }

  private addArticle(article: Article, price?: number) {
    const shopping = new Shopping(article.code, article.description, article.retailPrice);
    if (article.stock < 1) {
      shopping.committed = false;
    }
    this.shoppingCart.push(shopping);
    this.lastArticle = article;
    if (price) {
      shopping.total = price;
      shopping.updateDiscount();
    }
    this.synchronizeAll();
  }

  private reset() {
    this.shoppingCart = [];
    this.synchronizeAll();
  }

  private synchronizeAll() {
    this.shoppingCartSubject.next(this.shoppingCart);
    this.synchronizeCartTotal();
  }

}
