import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Provider} from '../shared/provider.model';

@Component({
  templateUrl: 'provider-detail-dialog.component.html',
  styleUrls: ['provider-dialog.component.css']
})

export class ProviderDetailDialogComponent {

  provider: Provider = {id: null, company: null, phone: null, active: true, address: null, email: null, nif: null, note: null};

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.provider = data.obj;
  }
}
