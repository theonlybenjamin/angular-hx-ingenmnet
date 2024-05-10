import { ISearchOrderRequest } from "./order.request";
import { IOrderResponse } from "./order.response";

export abstract class OrderPort {
    abstract listOrderPerDate(rangeDateSearch: ISearchOrderRequest): Promise<IOrderResponse[]>;
    abstract deleteOrder(orderId: number): Promise<void>;
    abstract updateOrderState(orderId: number, newStateId: number): Promise<void>;
}