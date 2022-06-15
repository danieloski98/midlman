export interface IDeliveryMan {
    firstName: string,
    photo: string,
    middleName: string,
    username: string,
    lastName: string,
    email: string,
    password: string,
    adminType: string,
    phone: string,
    deliveryManDocs:{
        verification: string,
        guarrantor: string;
    }
}