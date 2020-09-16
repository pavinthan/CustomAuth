import { LOGIN_TYPE } from "../utils/enums";
import { Auth0ClientOptions, ILoginHandler, LoginWindowResponse, TorusVerifierResponse } from "./interfaces";
export default abstract class AbstractLoginHandler implements ILoginHandler {
    readonly clientId: string;
    readonly verifier: string;
    readonly redirect_uri: string;
    readonly typeOfLogin: LOGIN_TYPE;
    readonly redirectToOpener?: boolean;
    readonly jwtParams?: Auth0ClientOptions;
    protected nonce: string;
    protected finalURL: URL;
    constructor(clientId: string, verifier: string, redirect_uri: string, typeOfLogin: LOGIN_TYPE, redirectToOpener?: boolean, jwtParams?: Auth0ClientOptions);
    get state(): string;
    abstract getUserInfo(params: LoginWindowResponse): Promise<TorusVerifierResponse>;
    abstract setFinalUrl(): void;
    handleLoginWindow(): Promise<LoginWindowResponse>;
}
