import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, SEARCH_USER_SUCCESS, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "./auth.actionType";

const initialState = {
    token: null,
    error: null,
    loading: false,
    user: null,
    searchUser: []
}

export const authReducer = (state=initialState, action) => {

    switch (action.type) {

        case LOGIN_REQUEST:
        case REGISTER_REQUEST:  
        case GET_PROFILE_REQUEST:
        case UPDATE_PROFILE_REQUEST:
            return {...state, loading: true, error: null}

        case LOGIN_SUCCESS:
            return {...state, loading:false, token: action.payload, error: null}

        case GET_PROFILE_SUCCESS:
        case UPDATE_PROFILE_SUCCESS:
            return {...state, user: action.payload, error: null, loading: false}

        case REGISTER_SUCCESS:
            return {...state, loading: false, error: null}

        case SEARCH_USER_SUCCESS:
            return {...state, searchUser: action.payload, error: null, loading: false}

        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
        case GET_PROFILE_FAILURE:
        case UPDATE_PROFILE_FAILURE:
            return {...state, loading:false, error: action.payload}
    
        default:
            return state;
    }
}