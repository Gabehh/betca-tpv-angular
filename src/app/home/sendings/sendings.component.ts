import {Component} from '@angular/core';
import {Sendings} from './sendings.model';
import {SendingsService} from './sendings.service';
import {MatDialog} from '@angular/material';
import {SendingsCreationDialogComponent} from './sendings-creation-dialog.component';

@Component({
  templateUrl: 'sendings.component.html',
})
export class SendingsComponent {

  sendings: Sendings;

  title = 'Delivery Management';
  columns = ['username', 'id', 'reference', 'creationDate', 'estado'];
  data: Sendings[];

  constructor(private sendingsService: SendingsService, private dialog: MatDialog) {
    this.sendings = {username: null, id: null, reference: null, creationdate: null, estado: null};
    this.data = null;
  }

  search() {
    this.sendingsService.readAll().subscribe(
      data => {
        this.data = data,
          console.log(this.data);
      },
    );
  }

  resetSearch() {
    this.sendings = {username: null, id: null, reference: null, creationdate: null, estado: null};
  }

  create() {
    this.dialog.open(SendingsCreationDialogComponent);
  }


  read(sendings: Sendings) {
    // TODO
  }

  update(sendings: Sendings) {
    // TODO
  }

  delete(sendings: Sendings) {
    // TODO
  }
}
