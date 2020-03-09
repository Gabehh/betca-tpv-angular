import {Component} from '@angular/core';
import {InvoiceService} from '../shared/invoice.service';
import {Invoice} from './invoice.model';
import {SearchInvoice} from './searchInvoice.model';

@Component({
  templateUrl: `invoices.component.html`
})
export class InvoicesComponent {

  title = 'Invoices';
  columns = ['invoice ref.', 'ticket ref.', 'user mobile'];
  data: Invoice[];
  searchInvoice: SearchInvoice;

  constructor(private invoiceService: InvoiceService) {
    this.data = null;
    this.searchInvoice = { mobile: null, toDate: null, fromDate: null};
  }

  search() {
    // TODO implement search with fields
  }

  resetSearch() {
    this.searchInvoice = {mobile: null, fromDate: null, toDate: null};
  }

  print(invoice: Invoice) {
    // TODO implement print invoice
  }
}
