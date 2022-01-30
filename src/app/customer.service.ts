import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  baseurl='http://localhost:8081/customer/';

  constructor(private httpClient: HttpClient) { }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(`${this.baseurl}` + 'add', customer);
  }
  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseurl}` + 'get/' + `${id}`);
  }
  getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseurl}` + 'getall');
  }
  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.baseurl}` + 'update/' + `${id}`, customer);
  }
  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${this.baseurl}` + 'delete/' + `${id}`);
  }
}
