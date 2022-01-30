import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { FormBuilder } from '@angular/forms';
import { Customer } from '../customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  customer!: Customer;
  cid!: number;
  customerForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    location: [''],
    email: ['']
  });
  
  constructor(private customerService: CustomerService, private formBuilder: FormBuilder, private router: Router) {
  }

  onSubmit() {
    this.customer = <Customer> this.customerForm.value;
    console.log("Inside submit method....");
    this.saveCustomer(this.customer);
  }

  saveCustomer(customer: Customer) {
    
    this.customerService.addCustomer(customer).subscribe(
      data => {
        this.cid = data.cid, 
        window.alert("Your Customer ID is : " + this.cid),
        this.navigateToDetails(this.cid)
      },
      error => {
        console.log(error)
      }
      );
  }

  navigateToDetails(cid: number) {
    this.router.navigate(['/get',cid]);
  }
}
