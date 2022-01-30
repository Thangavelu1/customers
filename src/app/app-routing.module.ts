import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { GetCustomerComponent } from './get-customer/get-customer.component';
import { HomeComponent } from './home/home.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';

const routes: Routes = [
  {path: "all", component: ListCustomerComponent},
  {path: "add", component: AddCustomerComponent},
  {path: "get", component: GetCustomerComponent},
  {path: "get/:cid", component: GetCustomerComponent},
  {path: "", component: HomeComponent, 
  children: [
    { path: "home", component: HomeComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
