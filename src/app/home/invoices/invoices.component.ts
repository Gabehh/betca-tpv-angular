import {Component, OnInit} from '@angular/core';
import {InvoiceService} from '../shared/invoice/invoice.service';
import {Invoice} from '../shared/invoice/invoice.model';
import {InvoiceFilter} from '../shared/invoice/invoice-filters.model';


@Component({
  templateUrl: `invoices.component.html`
})
export class InvoicesComponent implements OnInit {

  title = 'Invoices';
  columns = ['invoice', 'ticket', 'mobile'];
  data: Invoice[];
  filter: InvoiceFilter;

  constructor(private invoiceService: InvoiceService) {
    this.data = [];
    this.filter = {mobile: null, toDate: null, fromDate: null};
  }

  ngOnInit() {
    this.invoiceService.readAll().subscribe(
      data => this.data = data
    );
  }

  search() {
    this.invoiceService.search(this.filter).subscribe(
      data => this.data = data
    );
  }

  resetSearch() {
    this.filter = {mobile: null, fromDate: null, toDate: null};
  }

  print(invoice: Invoice) {
    // TODO implement print invoice
  }
}
