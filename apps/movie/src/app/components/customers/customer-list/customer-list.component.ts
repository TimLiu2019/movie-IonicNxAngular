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
  constructor( private customersService: CustomersTestDataService) { }

  ngOnInit(): void {
    this.customers = this.customersService.getCustomers();

  }

}
