import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../_services/customer.service';
import { Customer } from '../_interfaces/Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{
  customers: Customer[] = [];
  constructor(private customerService: CustomerService) {}
  
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
}
