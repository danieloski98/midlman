export interface IProduct {
    brand: string;
    category: string;
    controlled: boolean;
    createdAt: string;
    description: string;
    image: Array<string>;
    isVerified: boolean;
    name: string;
    promo: Array<any>;
    reviews: Array<any>;
    stock: number;
    unitPrice: number;
    updatedAt: string;
    user: string;
    _id: string;
    variation: Array<any>;
}

