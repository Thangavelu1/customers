import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {

  cid = new FormControl('');
  customer!: Customer;
  customerForm = this.formBuilder.group({
    cid:[''],
    firstName: [''],
    lastName: [''],
    location: [''],
    email: ['']
  });
  

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.customer = this.getCustomer(this.route.snapshot.params['cid']);
  }

  onSubmit() {
    this.getCustomer(this.cid.value);
  }

  getCustomer(cid: number): Customer {
    this.customerService.getCustomerById(cid).subscribe(data => {
      this.customer = data
    });
    return this.customer;
  }

  onUpdate(cid: number) {
    this.customerForm.setValue(this.getCustomer(cid));
  }

  update() {
    this.updateCustomer(this.cid.value, this.customerForm.value);
  }
  
  updateCustomer(id: number, customer: Customer) {
    this.customerService.updateCustomer(id, customer).subscribe(data => {
      this.customer = data,
      window.alert("Your Customer Details are updated");
      this.getCustomer(id);
    });
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(data => {
      console.log(data),
      window.alert("Your Account has been deleted successfully")
    });
  }
}
