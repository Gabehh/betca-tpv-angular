import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';

import {TicketCreation} from './ticket-creation.model';
import {ShoppingCartService} from './shopping-cart.service';

@Component({
  templateUrl: 'check-out-dialog.component.html',
  styleUrls: ['shopping-cart.component.css']
})
export class CheckOutDialogComponent {

  totalPurchase: number;
  requestedInvoice = false;
  requestedGiftTicket = false;
  ticketCreation: TicketCreation;

  constructor(private dialog: MatDialog, private shoppingCartService: ShoppingCartService) {
    this.totalPurchase = this.shoppingCartService.getTotalShoppingCart();
    this.ticketCreation = {cash: 0, card: 0, voucher: 0, shoppingCart: null, note: ''};
  }

  static format(value: number): number {
    return value ? value : 0; // empty string,NaN,false,undefined,null,0 is: false
  }

  uncommitted() {
    return this.shoppingCartService.unCommitArticlesExist();
  }

  totalCommitted() {
    return this.shoppingCartService.getTotalCommitted();
  }

  warning(): boolean {
    return (!this.ticketCreation.userMobile) && this.shoppingCartService.unCommitArticlesExist();
  }

  returnedAmount(): number {
    return Math.round(
      (CheckOutDialogComponent.format(this.ticketCreation.cash)
        + CheckOutDialogComponent.format(this.ticketCreation.card)
        + CheckOutDialogComponent.format(this.ticketCreation.voucher)
        - this.totalPurchase) * 100
    ) / 100;
  }

  returnedCash(): number {
    if (this.ticketCreation.cash >= this.returnedAmount()) {
      return this.returnedAmount();
    } else {
      return this.ticketCreation.cash;
    }
  }

  fillCard() {
    if (this.returnedAmount() < 0) {
      this.ticketCreation.card = -this.returnedAmount();
    } else {
      this.ticketCreation.card = this.totalPurchase;
      this.ticketCreation.cash = 0;
    }
  }

  fillCash() {
    this.ticketCreation.cash = CheckOutDialogComponent.format(this.ticketCreation.cash);
    if (this.returnedAmount() < 0 && this.ticketCreation.cash === 0) {
      this.ticketCreation.cash = -this.returnedAmount();
    } else if (this.ticketCreation.cash < 20) {
      this.ticketCreation.cash = (Math.round(this.ticketCreation.cash / 5) + 1) * 5;
    } else if (this.ticketCreation.cash < 50) {
      this.ticketCreation.cash = (Math.round(this.ticketCreation.cash / 10) + 1) * 10;
    } else {
      this.ticketCreation.cash = (Math.round(this.ticketCreation.cash / 50) + 1) * 50;
    }
  }

  consumeVoucher() {
    // TODO consumir un vale que se entrega como parte del pago
  }

  invalidCheckOut(): boolean {
    return (this.totalPurchase + this.returnedAmount() - this.shoppingCartService.getTotalCommitted() < -0.01); // rounding errors
  }

  round(value) {
    return Math.round(value * 100) / 100;
  }

  checkOut() {
    const returned = this.returnedAmount();
    const cash = this.ticketCreation.cash;
    let voucher = 0;
    this.ticketCreation.cash = CheckOutDialogComponent.format(this.ticketCreation.cash);
    this.ticketCreation.card = CheckOutDialogComponent.format(this.ticketCreation.card);
    this.ticketCreation.voucher = CheckOutDialogComponent.format(this.ticketCreation.voucher);
    if (returned > 0) {
      this.ticketCreation.cash -= returned;
    }
    if (this.ticketCreation.cash < 0) {
      voucher = -this.ticketCreation.cash;
      this.ticketCreation.cash = 0;
    }

    if (this.ticketCreation.card > 0) {
      this.ticketCreation.note += ' Pay with card: ' + this.round(this.ticketCreation.card) + '.';
    }
    if (this.ticketCreation.voucher > 0) {
      this.ticketCreation.note += ' Pay with voucher: ' + this.round(this.ticketCreation.voucher) + '.';
    }
    if (this.ticketCreation.cash > 0) {
      this.ticketCreation.note += ' Pay with cash: ' + this.round(cash) + '.';
    }
    if (returned > 0) {
      this.ticketCreation.note += ' Return: ' + this.round(returned) + '.';
    }
    this.shoppingCartService.checkOut(this.ticketCreation, voucher, this.requestedInvoice, this.requestedGiftTicket).subscribe(
      () => {
      }, () => this.dialog.closeAll()
      , () => this.dialog.closeAll()
    );
  }

  invalidInvoice(): boolean {
    // TODO pendiente de calcular. Hace falta tener al usuario totalmente completado
    return true;
  }

}
