import { Dispatch } from "react";

export enum EAuthReducer {
    login = '[auth] login',
    logout = '[auth] logout',
}

export interface IStateAuth{
    name?: string
    logged: boolean;
}

export type TActionAuth = 
    | { type: EAuthReducer.login; payload: { name: string; }; }
    | { type: EAuthReducer.logout; }

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