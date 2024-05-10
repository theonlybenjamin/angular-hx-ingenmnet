import { Component } from '@angular/core';
import { RegisterOrderFormComponent } from '../../../application/componentes/register-order-form/register-order-form.component';

@Component({
  selector: 'app-register-order',
  standalone: true,
  imports: [
    RegisterOrderFormComponent
  ],
  templateUrl: './register-order.component.html',
  styleUrl: './register-order.component.scss'
})
export class RegisterOrderComponent {

}
