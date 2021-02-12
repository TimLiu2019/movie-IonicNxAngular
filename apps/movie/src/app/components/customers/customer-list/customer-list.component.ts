import { Component, OnInit } from '@angular/core';
import { CustomersTestDataService } from '../../../services/testData/customers-test-data.service';
import { Customer } from '../../../model/customer';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public customers = new Array<Customer>();
  public previousSelectedCustomer: Customer;
  public selectedCustomer:string;
  constructor( private customersService: CustomersTestDataService) { }

  ngOnInit(): void {
    this.customers = this.customersService.getCustomers();

  }

  onSelectedCustomer(customer: Customer){
    console.log('clicked customer', customer.firstName);

    document.getElementById(customer.guid).classList.add('customer-selected');

    if (this.previousSelectedCustomer !== undefined) {
      if (localStorage.getItem('selectedCustomerGuid') !== customer.guid) {
        document.getElementById(localStorage.getItem('selectedCustomerGuid')).classList.remove('customer-selected');
      }
    }
    this.previousSelectedCustomer = customer;
    localStorage.setItem('selectedCustomerGuid', customer.guid);
  }
}
