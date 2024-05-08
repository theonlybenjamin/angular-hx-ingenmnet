import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search-order',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './search-order.component.html',
  styleUrl: './search-order.component.scss'
})
export class SearchOrderComponent {

}
