import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactPhonesComponent } from './contact-phones/contact-phones.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    ContactPhonesComponent,
    CustomerListComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
