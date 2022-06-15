export interface IExpress {
  active: boolean;
  documentVerified: boolean;
  walletBalance: number;
  _id: string;
  email: string;
  password: string;
  userType: string;
  firstName: string;
  lastName: string;
  username: string;
  phone: string;
  address: {
    location: string;
    state: string;
    country: string;
  };
  createdAt: string;
  updatedAt: string;
}
