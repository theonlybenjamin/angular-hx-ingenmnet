export interface IOrder {
    clientName: string;
    documentTypeId: number;
    documentNumber: string;
    registerDate: string;
    receiptType: number;
    subTotal: number;
    igv: number;
    total: number;
    orderDetail: IOrderDetail[];
}

export interface IOrderDetail {
    productId: number;
    quantity: number;
    unitPrice: number;
}