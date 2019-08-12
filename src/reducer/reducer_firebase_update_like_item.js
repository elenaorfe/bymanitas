import * as types from '../action/action_type';
import initialState from './initialState';

const firebaseUpdateLikeItemReducer=(state = initialState.firebaseUpdateLikeItem, action)=>{
    switch(action.type) {
        case types.FIREBASE_UPDATE_LIKE_ITEM:
            return {
                state,
                firebaseUpdateLikeItem: action.firebaseUpdateLikeItem
            }
        default:
            return state;
    }
}

export default firebaseUpdateLikeItemReducer;
