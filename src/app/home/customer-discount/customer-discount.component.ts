import {Component} from '@angular/core';

@Component({
  templateUrl: 'customer-discount.component.html'
})

export class CustomerDiscountComponent {
  title: 'Customer Discount';
  columns: ['Mobile', 'Discount'];
  data: any;

  create() {
  }

  delete($event: any) {
  }

  read($event: any) {
  }

  update($event: any) {
  }
}

