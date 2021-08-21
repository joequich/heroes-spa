import { EAuthReducer, IStateAuth, TActionAuth } from '../types/types';

export const authReducer = (state: IStateAuth, action: TActionAuth) => {
    switch (action.type) {
        case EAuthReducer.login:
            return {
                ...action.payload,
                logged: true
            }
        
        case EAuthReducer.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }
}