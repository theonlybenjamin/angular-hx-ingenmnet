import { Component } from '@angular/core';
import { SearchOrderComponent } from '../../../application/componentes/search-order/search-order.component';
import { ListOrderTableComponent } from '../../../application/componentes/list-order-table/list-order-table.component';

@Component({
  selector: 'app-list-order',
  standalone: true,
  imports: [
    SearchOrderComponent,
    ListOrderTableComponent
  ],
  templateUrl: './list-order.component.html',
  styleUrl: './list-order.component.scss'
})
export class ListOrderComponent {

}
