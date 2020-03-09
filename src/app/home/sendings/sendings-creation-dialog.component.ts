import {Component} from '@angular/core';
import {Sendings} from './sendings.model';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {SendingsService} from './sendings.service';


@Component({
  templateUrl: 'sendings-creation-dialog.component.html'
})

export class SendingsCreationDialogComponent {
  newSendings: Sendings;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<SendingsCreationDialogComponent>,
              private sendingsService: SendingsService, private message: MatSnackBar) {
    this.newSendings = {username: null, id: null, reference: null, creationdate: null, estado: false};
  }

  createSendings() {
    this.sendingsService.create(this.newSendings).subscribe(
      data => this.message.open('SendingsInfo create: ' + data.id, null, {
        duration: 20000,
      })
    );
  }
}
