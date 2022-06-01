export class Product {
  id: number;
  reference: string;
  name: string;
  amount: number;

  constructor(reference: string, name: string, amount: number) {
    this.reference = reference;
    this.name = name;
    this.amount = amount;
  }
}
