import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../../model/customer';

@Component({
  selector: 'customer-list-item',
  templateUrl: './customer-list-item.component.html',
  styleUrls: ['./customer-list-item.component.scss']
})
export class CustomerListItemComponent implements OnInit {

  @Input('customer') customer: Customer;


  constructor() { }

  ngOnInit(): void {
    
  }

}
