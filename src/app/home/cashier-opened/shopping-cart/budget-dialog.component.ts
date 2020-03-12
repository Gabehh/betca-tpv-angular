import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';

import {ShoppingCartService} from './shopping-cart.service';
import {BudgetCreation} from './budget-creation.model';

@Component({
  templateUrl: 'budget-dialog.component.html',
  styleUrls: ['shopping-cart.component.css']
})
export class BudgetDialogComponent {

  budgetCreation: BudgetCreation;
  constructor(private dialog: MatDialog, private shoppingCartService: ShoppingCartService) {
    this.budgetCreation = { shoppingCart: null};
  }

  createBudget() {
    this.budgetCreation.shoppingCart = this.shoppingCartService.getShoppingCart()
    this.shoppingCartService.createBudget(this.budgetCreation).subscribe(
      () => {
        this.dialog.closeAll();
      }
      , () => this.dialog.closeAll()
    );
    // TODO create budget
  }
}
