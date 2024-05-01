import { LoginPort } from "../../domain/ports/login/login.port";
import { ILoginInformation } from "../../domain/ports/models/login-information.interface";
import { Injectable, inject } from "@angular/core";
import { HttpMask } from "../mask/http.mask";
import { Endpoints } from "../../domain/enum/endpoints.enum";

@Injectable({
    providedIn: 'root'
})
export class LoginAdapter implements LoginPort {
    private httpMask = inject(HttpMask);
    login(userInformation: ILoginInformation): Promise<void> {
        return this.httpMask.post('https://capacitacion.cedhetec.com/' + Endpoints.LOGIN, userInformation)
        .then(() => console.log('Adapter 1'))
    }
}