import {Component} from '@angular/core';
import {Provider} from '../shared/provider.model';
import {ProviderCreationDialogComponent} from './provider-creation-dialog.component';
import {MatDialog} from '@angular/material';
import {ProviderService} from './provider.service';
import {ProviderSearch} from './provider-search.model';
import {ProviderDetailDialogComponent} from './provider-detail-dialog.component';

@Component({
  templateUrl: 'providers.component.html'
})
export class ProvidersComponent {

  provider: Provider;
  providerSearch: ProviderSearch;

  title = 'Providers management';
  columns = ['company', 'nif', 'phone'];
  providers: Provider[];

  constructor(private dialog: MatDialog, private providerService: ProviderService) {
    this.provider = {company: null, nif: null, phone: null};
    this.providerSearch = {company: null, nif: null, phone: null};
    this.providers = null;
  }

  search() {
    if ((this.providerSearch.company == null) && (this.providerSearch.nif == null) && (this.providerSearch.phone == null)) {
      this.providerService.readAll().subscribe(
        data => this.providers = data
      );
    } else {
      this.providerService.search(this.providerSearch).subscribe(
        data => this.providers = data
      );
    }
  }

  resetSearch() {
    this.providerSearch = {company: null, nif: null, phone: null};
  }

  create() {
    this.dialog.open(ProviderCreationDialogComponent).afterClosed().subscribe(
      result => {
        this.search();
      }
    );
  }

  read(provider: Provider) {
    this.dialog.open(ProviderDetailDialogComponent, {
      data: {obj: provider}
    });
  }

  update(provider: Provider) {
    // TODO
  }
}
