export interface IOrderResponse {
    orderId: number;
    documentNumber: string;
    clientName: string;
    createdDate: string;
    total: number;
    stateId: number;
    state: string;
}