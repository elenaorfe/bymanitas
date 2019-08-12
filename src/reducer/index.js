import { combineReducers } from 'redux';
import firebaseLoginReducer from './reducer_firebase_login';
import firebaseUpdateLikeItemReducer from './reducer_firebase_update_like_item';
import contactformShowReducer from './reducer_contactform_show';

const appReducer = combineReducers({
    firebaseLogin: firebaseLoginReducer,
    firebaseUpdateLikeItem: firebaseUpdateLikeItemReducer,
    contactformShowReducer: contactformShowReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;
