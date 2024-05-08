import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ISearchOrderRequest } from '../../../domain/ports/order/order.request';

@Component({
  selector: 'app-search-order',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './search-order.component.html',
  styleUrl: './search-order.component.scss'
})
export class SearchOrderComponent {
  public rangeDate: FormGroup = new FormGroup({
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required)
  });
  @Output() emitSearchOrder: EventEmitter<ISearchOrderRequest> = new EventEmitter();

  searchOrder(): void {
    this.rangeDate.value.start = (this.rangeDate.value.start as Date).getTime() / 1000;
    this.rangeDate.value.end = (this.rangeDate.value.end as Date).getTime() / 1000;
    this.emitSearchOrder.emit(this.rangeDate.value)
  }
}
