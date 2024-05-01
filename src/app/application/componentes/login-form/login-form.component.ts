import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ILoginInformation } from '../../../domain/ports/models/login-information.interface';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Output() emitUserCredentials: EventEmitter<ILoginInformation> = new EventEmitter();
  public userCredentialsForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  sendUserCredentials() {
    this.emitUserCredentials.emit(this.userCredentialsForm.value);
  }
}
