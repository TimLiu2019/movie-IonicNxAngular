import { Injectable } from '@angular/core';
import { Customer } from '../../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersTestDataService {

  constructor() { }

  customers = [
    { 
    guid: '889cec46-7682-4025-a2f4-9e158c756fdf',
    lastName: 'Smith',
    firstName: 'Tom',
    email: 'tom@gmail.com',
    phoneNumber: '905-123-4567',
    currentRental: 3,
    transaction: 5,
    city:'London',
    address:'123 King Street '
   
  },
  { 
    guid: '999cec46-7682-4025-a2f4-9e158c756fdf',
    lastName: 'Lee',
    firstName: 'Jake',
    email: 'jake@gmail.com',
    phoneNumber: '905-123-4567',
    currentRental: 2,
    transaction: 7,
    city:'London',
    address:'123 King Street '
   
  },
  { 
    guid: '119cec46-7682-4025-a2f4-9e158c756fdf',
    lastName: 'Jery',
    firstName: 'Mike',
    email: 'mike@gmail.com',
    phoneNumber: '905-123-4567',
    currentRental: 10,
    transaction: 50,
    city:'London',
    address:'123 King Street '
   
  },
  { 
    guid: '229cec46-7682-4025-a2f4-9e158c756fdf',
    lastName: 'King',
    firstName: 'Mary',
    email: 'mary@gmail.com',
    phoneNumber: '905-123-4567',
    currentRental: 1,
    transaction: 9,
    city:'London',
    address:'123 King Street '
   
  },
  { 
    guid: '339cec46-7682-4025-a2f4-9e158c756fdf',
    lastName: 'Dam',
    firstName: 'Dema',
    email: 'dema@gmail.com',
    phoneNumber: '905-123-4567',
    currentRental: 5,
    transaction: 8,
    city:'London',
    address:'123 King Street '
   
  },
  { 
    guid: '449cec46-7682-4025-a2f4-9e158c756fdf',
    lastName: 'Tmith',
    firstName: 'Ykin',
    email: 'yik@gmail.com',
    phoneNumber: '905-123-4567',
    currentRental: 8,
    transaction: 5,
    city:'London',
    address:'123 King Street '
   
  },
  { 
    guid: '559cec46-7682-4025-a2f4-9e158c756fdf',
    lastName: 'Lmith',
    firstName: 'Pat',
    email: 'pat@gmail.com',
    phoneNumber: '905-123-4567',
    currentRental: 3,
    transaction: 5,
    city:'London',
    address:'123 King Street '
   
  },
];

getCustomers() {
   
  const customers: Customer[] = [];
  
  for (const c of this.customers) {
    const customer = new Customer();
    customer.guid = c.guid;
    customer.firstName = c.firstName;
    customer.lastName = c.lastName;
    customer.email = c.email;
    customer.city = c.city;
    customer.phoneNumber = c.phoneNumber;
    customer.currentRental = c.currentRental;
    customer.transactions = c.transaction;
    console.log('movie ', customer);
    customers.push(customer);
  }
  console.log(customers)
  for (const cc of customers){
    console.log('customers: ', cc);
  }
  return customers;
}

  
}
