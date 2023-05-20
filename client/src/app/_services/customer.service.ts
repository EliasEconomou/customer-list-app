import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../_interfaces/Customer'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseApiUrl: string = "https://localhost:7023/api/Customers"
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseApiUrl)
  }



}
