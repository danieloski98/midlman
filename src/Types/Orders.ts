export interface IOrder {
    transactionRef?: string;
    shipmentAddress: string;
    type: string;
    orderRequestId?: string;
    couponId?: string;
    paymentMethod?: string;
    status: string;
    updatedAt: string;
    createdAt: string;
    quantity: number;
    product: string;
    variations: Array<string>;
    user: string;
    _id: string;
}