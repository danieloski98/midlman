export interface IPortal {
  active: boolean;
  documentVerified: boolean;
  walletBalance: number;
  _id: string;
  email: string;
  password: string;
  userType: string;
  cacDoc: string;
  licenseDoc: string;
  businessName: string;
  username: string;
  phone: string;
  businessType: string;
  ePin: string;
  address: {
    location: string;
    state: string;
    country: string;
  };
  createdAt: string;
  updatedAt: string;
  deliveryAddress: {
    location: string;
    state: string;
  };
  photo: string;
}
