import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../_services/customer.service';
import { Customer } from '../_interfaces/Customer';
import { NgFor } from '@angular/common';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRemove,faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [NgFor, CommonModule, NgbTypeaheadModule, FontAwesomeModule],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})




export class CustomerListComponent implements OnInit{

  customers: Customer[] = [];
  delIcon = faRemove;
  addIcon = faAdd;
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

  onClickDelete(id: number): void {
    console.log("onClickDelete");
    this.customers = this.customers.filter((c) => c.id != id)


  }


}

