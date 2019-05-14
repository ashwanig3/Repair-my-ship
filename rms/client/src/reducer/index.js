import { userInfo } from "os";

const initState = {
    currentUser: {}
}

export default function rootReducer(state = initState, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                currentUser: action.data
            }
        }
        default : 
        return state;
    }
}