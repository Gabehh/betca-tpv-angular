import {Component, OnInit} from '@angular/core';
import {Provider} from './provider.model';

@Component({
  selector: 'app-providers-dropdown',
  templateUrl: './providers-dropdown.component.html'
})
export class ProvidersDropdownComponent implements OnInit {

  providers: Provider[];

  constructor() {
  }

  ngOnInit() {
  }

  readAll() {
    // TODO
  }
}
