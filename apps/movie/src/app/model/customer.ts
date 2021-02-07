export class Customer {
  private Guid: string;
  private LastName: string;
  private FirstName: string;
  private PhoneNumber: string;
  private CurrentRental: number;
  private Transactions: number;
  private Address: string;
  private City: string;
  private ZipCode: string;

  constructor() {}

  get guid(): string {
    return this.Guid;
  }

  set guid(value: string) {
    this.Guid = value;
  }

  get firstName(): string {
    return this.FirstName;
  }

  set firstName(value: string) {
    this.FirstName = value;
  }

  get lastName(): string {
    return this.LastName;
  }

  set lastname(value: string) {
    this.LastName = value;
  }
  get phoneNumber(): string {
    return this.PhoneNumber;
  }

  set phoneNumber(value: string) {
    this.PhoneNumber = value;
  }

  get address(): string {
    return this.Address;
  }

  set address(value: string) {
    this.Address = value;
  }

  get city(): string {
    return this.City;
  }

  set city(value: string) {
    this.City = value;
  }

  get zipCode(): string {
    return this.zipCode;
  }

  set zipCode(value: string) {
    this.ZipCode = value;
  }
  get currentRental(): number {
    return this.CurrentRental;
  }

  set currentRental(value: number) {
    this.CurrentRental = value;
  }

  get transactions(): number {
    return this.Transactions;
  }

  set transactions(value: number) {
    this.Transactions = value;
  }
}
