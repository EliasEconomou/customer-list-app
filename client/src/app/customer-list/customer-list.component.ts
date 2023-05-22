import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../_services/customer.service';
import { Customer } from '../_interfaces/Customer';
import { NgFor } from '@angular/common';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRemove, faAdd, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ContactPhonesComponent } from '../contact-phones/contact-phones.component';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component'
import { AddCustomerComponent } from '../add-customer/add-customer.component'

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [NgFor, CommonModule, NgbTypeaheadModule, FontAwesomeModule, 
    ContactPhonesComponent, ConfirmDeleteComponent, AddCustomerComponent],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})




export class CustomerListComponent implements OnInit{

  customers: Customer[] = [];
  delIcon = faRemove;
  addIcon = faAdd;
  contactIcon = faPhone;
  constructor(private customerService: CustomerService) {
  }
  
  ngOnInit() {
    this.getCustomers();
  }

  // Subscribe to the observable of customer service to get the list of customers
  getCustomers(): void {
    this.customerService.getCustomers().subscribe({
      next: (customers: Customer[]) => this.customers = customers,
      error: (er) => console.log(er),
      complete: () => console.log("Got customer list")
    })
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id).subscribe({
      next: (response) => console.log('Response from delete:',response),
      error: (er) => console.log(er),
      complete: () => console.log('Customer with id =',id,'deleted')
    })
  }

  onDelete(id: number): void {
    console.log("onClickDelete");
    this.customers = this.customers.filter((c) => c.id != id);
    this.deleteCustomer(id);
  }

  addNewCustomer(event: any) {
    console.log("asd",event);
    // todo
  }

}

