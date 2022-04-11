import * as actions from '../actions/authActions';

const INITIAL_STATE = {
    user: null,
    error: '',
    loginFailed: null, 
    registerFailed: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case (actions.AUTH_REGISTER_OK): {
            return {...state, user: action.payload, error: ''};
        }
        case (actions.AUTH_REGISTER_ERROR): {
            return {...state, error: action.payload, registerFailed: true, loginFailed: null, user: false};
        }
        case (actions.AUTH_LOGIN_OK): {
            return {...state, user: action.payload, error: ''};
        }
        case (actions.AUTH_LOGIN_ERROR): {
            return {...state, error: action.payload, registerFailed: null, loginFailed: true,  user: false }
        }
        case (actions.CHECK_SESSION_OK): {
            return {...state, error: '', user: action.payload};
        }
        case (actions.CHECK_SESSION_ERROR): {
            return {...state, error: '', user: null}
        }
        case (actions.EDIT_USER_EMAIL_OK): {
            return {...state, error: '', user: action.payload};
        }
        case (actions.EDIT_USER_EMAIL_ERROR): {
            return {...state, error: action.payload}
        }
        case (actions.AUTH_USER_LOGOUT_OK):{
            return {...state, error: '', user: null};
        }
        case (actions.AUTH_USER_LOGOUT_ERROR):{
            return {...state, error: action.payload}
        }
        default:
            return state;
    };
};
