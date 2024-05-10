import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-register-order-form',
  standalone: true,
  imports: [
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    provideNativeDateAdapter()
  ],
  templateUrl: './register-order-form.component.html',
  styleUrl: './register-order-form.component.scss'
})
export class RegisterOrderFormComponent {
  public registerOrderForm: FormGroup = new FormGroup({
    clientName: new FormControl('', [Validators.required]),
    documentTypeId: new FormControl('', [Validators.required]),
    documentNumber: new FormControl('', [Validators.required]),
    registerDate: new FormControl('', [Validators.required]),
    receiptType: new FormControl('', [Validators.required]),
  });
}
