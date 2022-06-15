export interface ILedger {
  _id: string;
  reference: string;
  description: string;
  direction: string;
  newBalance: number;
  oldBalance: number;
  entity: string;
  entityId: string;
  user: any;
  transactionCode: string;
  createdAt: string;
  updatedAt: string;
}
