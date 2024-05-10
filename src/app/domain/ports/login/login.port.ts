import { ILoginInformation } from "./login-information.interface";
import { ILoginDTO } from "./login.dto";

export abstract class LoginPort {
    abstract login(userInformation: ILoginInformation): Promise<ILoginDTO>;
}