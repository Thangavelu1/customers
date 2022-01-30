import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

import { PagerService } from '../pager-service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  private customers: Customer[] = [];

  pager: any = {};
  pagedCustomers: Customer[] = [];

  constructor(private customerService: CustomerService, private pagerService: PagerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getAllCustomers().subscribe(data => {
      this.customers = data,
      console.log(this.customers.length),
      console.log(data),
      this.setPage(1)
    });
  }

  setPage(page: number) {
    console.log(this.customers.length)
    this.pager = this.pagerService.getPager(this.customers.length, page);
    this.pagedCustomers = this.customers.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
