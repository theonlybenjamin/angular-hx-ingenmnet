import { LoginPort } from "../../domain/ports/login/login.port";
import { ILoginInformation } from "../../domain/ports/models/login-information.interface";
import { Injectable, inject } from "@angular/core";
import { HttpMask } from "../mask/http.mask";
import { Endpoints } from "../../domain/enum/endpoints.enum";
import { ILoginDTO } from "../../domain/ports/login/login.dto";

@Injectable({
    providedIn: 'root'
})
export class LoginAdapter implements LoginPort {
    private httpMask = inject(HttpMask);
    login(userInformation: ILoginInformation): Promise<ILoginDTO> {
        return this.httpMask.post<ILoginDTO>(`https://capacitacion.cedhetec.com/${Endpoints.LOGIN}`, userInformation).then(
            response => {
                localStorage.setItem('token', response.accessToken);
                localStorage.setItem('expirationTime', response.expirationTime.toString());

                return response;
            }
        );
    }
}