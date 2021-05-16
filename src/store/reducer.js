import { 
    GET_USERS,
    SET_PAGE,
    TOGGLE_USER,
    SET_EDIT
} from './types';

const initState = {
    users: null,
    page: 1,
    checkedUser: null,
    edit: null
}

const global = (state = initState, action) => {
    switch(action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: [...action.payload]
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                page: action.payload
            }
        }
        case TOGGLE_USER: {
            return {
                ...state,
                checkedUser:  action.payload
            }
        }
        case SET_EDIT: {
            return {
                ...state,
                edit:  action.payload
            }
        }
        default: 
            return state;
    }
}


export default global;