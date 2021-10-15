export interface IAdmin {
  gender: string;
  active: boolean;
  roles: string[];
  photo: string;
  isDeliveryMan: boolean;
  adminType: string[];
  superAdmin: boolean;
  _id: string;
  firstName: string;
  middleName: string;
  username: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  deliveryManDocs: {
    vehicleNumber: string
    verification: string;
    guarrantor: string;
  };
  createdAt: string;
  updatedAt: string;
}
