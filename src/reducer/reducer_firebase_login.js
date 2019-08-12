import * as types from '../action/action_type';
import initialState from './initialState';

const firebaseLoginReducer=(state = initialState.firebaseLogin, action)=>{
    switch(action.type) {
        case types.FIREBASE_LOGIN:
            return {
                state,
                firebaseLogin: action.firebaseLogin
            }
        default:
            return state;
    }
}

export default firebaseLoginReducer;
