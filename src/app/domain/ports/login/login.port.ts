import { ILoginInformation } from "../models/login-information.interface";

export interface LoginPort {
    login(userInformation: ILoginInformation): Promise<void>;
}