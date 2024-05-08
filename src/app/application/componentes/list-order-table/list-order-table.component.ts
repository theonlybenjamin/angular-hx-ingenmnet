import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IOrderResponse } from '../../../domain/ports/order/order.response';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-list-order-table',
  standalone: true,
  imports: [
    MatTableModule,
    DatePipe,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './list-order-table.component.html',
  styleUrl: './list-order-table.component.scss'
})
export class ListOrderTableComponent {
  displayedColumns: string[] = ['orderId', 'documentNumber', 'clientName', 'createdDate', 'total', 'state', 'acciones'];
  @Input({required: true}) dataSource: IOrderResponse[] = [];
  @Output() deleteOrder: EventEmitter<number> = new EventEmitter<number>();
  @Output() activateOrder: EventEmitter<number> = new EventEmitter<number>();
  @Output() deactivateOrder: EventEmitter<number> = new EventEmitter<number>();

  deleteOrderEmit(id: number): void {
    this.deleteOrder.emit(id);
  }

  activateOrderEmit(id: number): void {
    this.activateOrder.emit(id);
  }

  deactivateOrderEmit(id: number): void {
    this.deactivateOrder.emit(id);
  }
}
