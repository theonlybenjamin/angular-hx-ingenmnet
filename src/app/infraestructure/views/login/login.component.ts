import { Component } from '@angular/core';
import { LoginFormComponent } from '../../../application/componentes/login-form/login-form.component';
import { ILoginInformation } from '../../../domain/ports/login/login-information.interface';
import { Router } from '@angular/router';
import { LoginPort } from '../../../domain/ports/login/login.port';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  constructor(
    private loginService: LoginPort,
    private router: Router
  ) {
    
  }
  doLogin(userInformation: ILoginInformation): void {
    this.loginService.login(userInformation).then(() => {
      this.router.navigate(['dashboard']);
    })
  }
}
