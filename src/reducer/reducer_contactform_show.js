import * as types from '../action/action_type';
import initialState from './initialState';

const contactFormShowReducer=(state = initialState.showContactForm, action)=>{
    switch(action.type) {
        case types.SHOW_CONTACTFORM:
            return {
                ...state,
                showContactForm: action.data
            }
        default:
            return state;
    }
}

export default contactFormShowReducer;
