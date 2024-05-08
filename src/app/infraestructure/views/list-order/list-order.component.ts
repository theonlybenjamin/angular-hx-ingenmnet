import { Component } from '@angular/core';
import { SearchOrderComponent } from '../../../application/componentes/search-order/search-order.component';
import { ListOrderTableComponent } from '../../../application/componentes/list-order-table/list-order-table.component';
import { ISearchOrderRequest } from '../../../domain/ports/order/order.request';
import { OrderPort } from '../../../domain/ports/order/order.port';
import { IOrderResponse } from '../../../domain/ports/order/order.response';

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
  constructor(
    private orderPort: OrderPort
  ) {}
  searchOrder(searchInformation: ISearchOrderRequest): void {
    this.orderPort.listOrderPerDate(searchInformation).then(response => this.listOrderResult = response);
  }

  activateOrder(orderId: number): void {
    
  }

  deactivateOrder(orderId: number): void  {

  }

  deleteOrder(orderId: number): void {
    this.orderPort.deleteOrder(orderId).then(()=>console.log('orden eliminada'));
  }
}
