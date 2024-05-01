import { ILoginInformation } from "../models/login-information.interface";

export abstract class LoginPort {
    abstract login(userInformation: ILoginInformation): Promise<void>;
}