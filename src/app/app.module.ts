import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';

import {CoreModule} from './core/core.module';
import {AppMaterialModule} from './app-material.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppComponents} from './app-components';
import {AppServices} from './app-services';

@NgModule({
  imports: [
    AppMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    CdkTableModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AppComponents.COMPONENTS,
    AppComponents.DIALOGS
  ],
  entryComponents: [
    AppComponents.DIALOGS
  ],
  providers: [
    AppServices.SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
