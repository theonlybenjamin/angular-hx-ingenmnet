import { Component } from '@angular/core';
import { LoginFormComponent } from '../../../application/componentes/login-form/login-form.component';
import { ILoginInformation } from '../../../domain/ports/models/login-information.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  doLogin(userInformation: ILoginInformation): void {
    
  }
}
