import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {Provider} from '../shared/provider.model';
import {ProviderService} from './provider.service';

@Component({
  templateUrl: 'provider-creation-dialog.component.html',
  styleUrls: ['provider-creation-dialog.component.css']
})

export class ProviderCreationDialogComponent {

  newProvider: Provider = {id: null, company: null, phone: null, active: true, address: null, email: null, nif: null, note: null};

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<ProviderCreationDialogComponent>,
              private message: MatSnackBar, private providerService: ProviderService) {
  }

  createProvider() {
    this.providerService.create(this.newProvider).subscribe(
      data => this.message.open('Provider created: ' + data.id, null, {
        duration: 2000,
      })
    );
  }
}
