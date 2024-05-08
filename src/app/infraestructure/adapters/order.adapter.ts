import { inject } from "@angular/core";
import { OrderPort } from "../../domain/ports/order/order.port";
import { ISearchOrderRequest } from "../../domain/ports/order/order.request";
import { IOrderResponse } from "../../domain/ports/order/order.response";
import { HttpMask } from "../mask/http.mask";
import { Endpoints } from "../../domain/enum/endpoints.enum";
import { HttpHeaders } from "@angular/common/http";

export class OrderAdapter implements OrderPort {
    private httpMask: HttpMask = inject(HttpMask);
    listOrderPerDate(rangeDateSearch: ISearchOrderRequest): Promise<IOrderResponse[]> {
        const httpHeaders: HttpHeaders = new HttpHeaders().append('Authorization', `Bearer ${localStorage.getItem('token')}`);
        return this.httpMask.get<IOrderResponse[]>(`${Endpoints.LIST_ORDER}/${rangeDateSearch.start}/${rangeDateSearch.end}`, httpHeaders);
    }

    deleteOrder(orderId: number): Promise<void> {
        return this.httpMask.delete(Endpoints.DELETE_ORDER + '/' + orderId, new HttpHeaders().append('Authorization', `Bearer ${localStorage.getItem('token')}`));
    }

} 