export interface IPrescription {
  status: string;
  _id: string;
  products: Array<{
    quantity: number;
    _id: string;
    productName: string;
    amount: number;
  }>;
  reason: string;
  user: string;
}
