import {Component} from '@angular/core';
import {InvoiceService} from '../shared/invoice/invoice.service';
import {Invoice} from '../shared/invoice/invoice.model';
import {SearchInvoice} from '../shared/invoice/searchInvoice.model';

@Component({
  templateUrl: `invoices.component.html`
})
export class InvoicesComponent {

  title = 'Invoices';
  columns = ['invoice', 'ticket', 'mobile'];
  data: Invoice[];
  searchInvoice: SearchInvoice;

  constructor(private invoiceService: InvoiceService) {
    this.data = [];
    this.searchInvoice = {mobile: null, toDate: null, fromDate: null};
  }

  search() {
    // TODO implement search with fields
    this.invoiceService.readAll().subscribe(
      data => this.data = data
    );
  }

  resetSearch() {
    this.searchInvoice = {mobile: null, fromDate: null, toDate: null};
  }

  print(invoice: Invoice) {
    // TODO implement print invoice
  }
}
