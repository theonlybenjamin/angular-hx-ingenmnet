import { Component } from '@angular/core';
import { SearchOrderComponent } from '../../../application/componentes/search-order/search-order.component';
import { ListOrderTableComponent } from '../../../application/componentes/list-order-table/list-order-table.component';
import { ISearchOrderRequest } from '../../../domain/ports/order/order.request';
import { OrderPort } from '../../../domain/ports/order/order.port';
import { IOrderResponse } from '../../../domain/ports/order/order.response';
import { EOrderStateId } from '../../../domain/enum/order-state-id.enum';

@Component({
  selector: 'app-list-order',
  standalone: true,
  imports: [
    SearchOrderComponent,
    ListOrderTableComponent,
  ],
  templateUrl: './list-order.component.html',
  styleUrl: './list-order.component.scss'
})
export class ListOrderComponent {
  listOrderResult: IOrderResponse[] = [];
  public lastDateRangeSearched!: ISearchOrderRequest;

  constructor(
    private orderPort: OrderPort
  ) {}
  searchOrder(dateRangeSearch: ISearchOrderRequest): void {
    this.lastDateRangeSearched = dateRangeSearch;
    this.orderPort.listOrderPerDate(dateRangeSearch).then(response => this.listOrderResult = response);
  }

  activateOrder(orderId: number): void {
    this.orderPort.updateOrderState(orderId, EOrderStateId.ACTIVE).then(() => this.searchOrder(this.lastDateRangeSearched));
  }

  deactivateOrder(orderId: number): void  {
    this.orderPort.updateOrderState(orderId, EOrderStateId.INACTIVE).then(() => this.searchOrder(this.lastDateRangeSearched));
  }

  deleteOrder(orderId: number): void {
    this.orderPort.deleteOrder(orderId).then(() => this.searchOrder(this.lastDateRangeSearched));
  }
}
