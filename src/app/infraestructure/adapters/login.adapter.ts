import { LoginPort } from "../../domain/ports/login/login.port";
import { ILoginInformation } from "../../domain/ports/models/login-information.interface";

export class LoginAdapter implements LoginPort {
    login(userInformation: ILoginInformation): Promise<void> {
        return Promise.resolve();
    }
}