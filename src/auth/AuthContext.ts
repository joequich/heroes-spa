import { createContext } from "react";
import { IUserAuth, IStateAuth, TActionAuth, IUserContextData } from "../types/types";

const inititalState = {
    logged: false 
}

const usersContextDefaultValue: IUserContextData = {
    user: inititalState,
    dispatch: () => null
}


export const AuthContext = createContext<IUserContextData>(usersContextDefaultValue);

