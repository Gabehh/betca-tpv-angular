import { Component} from '@angular/core';
import {Sendings} from './sendings.model';
import {SendingsService} from './sendings.service';
import {MatDialog} from '@angular/material';

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

  // ngOnInit() {
  // }


  search() {
    // TODO
  }

  resetSearch() {
    this.sendings = {username: null, id: null, reference: null, creationdate: null, estado: null};
  }

  create() {
    // TODO
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
