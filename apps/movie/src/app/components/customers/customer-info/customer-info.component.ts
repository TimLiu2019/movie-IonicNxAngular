import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../../../services/message-service.service';
import { Customer } from '../../../model/customer';
import { Subscription } from 'rxjs';
import { CustomersTestDataService } from '../../../services/testData/customers-test-data.service';


@Component({
  selector: 'customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {
  public customer = new Customer();
  subscription: Subscription;
  constructor( private customersService: CustomersTestDataService,private messageService: MessageServiceService) { 
    this.subscription = this.messageService.onMessage().subscribe(message => {
      if (message) {
        var mCustomer = message['mg'];
        let customer: Customer = Object.assign(new Customer(), JSON.parse(mCustomer));
        this.customer = customer;
        console.log('reveived',customer);
      } else {
        // clear messages when empty message received
        this.customer = new Customer();
      }
    });
  }

  ngOnInit(): void {
    this.customer = this.customersService.getCustomers()[0];
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
