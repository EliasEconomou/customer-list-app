import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactPhonesComponent } from './contact-phones/contact-phones.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    AddCustomerComponent,
    ConfirmDeleteComponent,
    ContactPhonesComponent,
    CustomerListComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  // exports: [ConfirmDeleteComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
