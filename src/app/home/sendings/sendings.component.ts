import { Component} from '@angular/core';
import {Sendings} from './sendings.model';

@Component({
  templateUrl: 'sendings.component.html',
})
export class SendingsComponent {

  sendings: Sendings;

  title = 'Delivery Management';
  columns = ['username', 'dni', 'mobile'];
  data: Sendings[];

  constructor() {
    this.sendings = {username: null, dni: null, mobile: null};
    this.data = null;
  }

  // ngOnInit() {
  // }


  search() {
    // TODO implement search with fields
  }

  resetSearch() {
    this.sendings = {username: null, dni: null, mobile: null};
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
