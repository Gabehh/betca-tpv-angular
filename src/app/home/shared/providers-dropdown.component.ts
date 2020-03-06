import {Component, OnInit} from '@angular/core';
import {Provider} from './provider.model';
import {ProviderService} from '../providers/provider.service';

@Component({
  selector: 'app-providers-dropdown',
  templateUrl: './providers-dropdown.component.html'
})
export class ProvidersDropdownComponent implements OnInit {

  providers: Provider[];

  constructor(private providerService: ProviderService) {
  }

  ngOnInit() {
  }

  readAll() {
    this.providerService.readAll().subscribe(
      data => this.providers = data
    );
  }
}
