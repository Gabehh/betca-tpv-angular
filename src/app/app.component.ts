import {Component} from '@angular/core';
import {environment} from '../environments/environment';
import {SystemService} from './system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version: string;
  apiEndPoint: string;
  profile: string;
  backend: string;

  constructor(private systemService: SystemService) {
    systemService.readVersion().subscribe(
      appInfo => this.backend = appInfo.version + '(' + appInfo.profile + ')(' + appInfo.build + ')'
    );
    this.version = environment.VERSION;
    this.apiEndPoint = environment.API;
    this.profile = environment.production ? 'Production' : 'Develop';
  }
}
