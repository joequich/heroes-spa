import { Dispatch } from "react";

export enum EAuthReducer {
    login = '[auth] login',
    logout = '[auth] logout',
}

export interface IUserAuth {
    name: string
}

export interface IStateAuth {
    user?: IUserAuth;
    logged: boolean;
}

export type TActionAuth = 
    | { type: EAuthReducer.login; payload: IUserAuth; }
    | { type: EAuthReducer.logout; payload: IUserAuth; }

export interface IUserContextData {
    user: IStateAuth;
    dispatch: Dispatch<TActionAuth>
}

/**

    Context: {
        user: {
            name: 'Joseph',
            logged: false
        }

        dispatch: () => 
    }

 */