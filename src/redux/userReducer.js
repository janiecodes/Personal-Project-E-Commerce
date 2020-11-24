const initialState = {
    userId: '',
    first_name: '',
    last_name: '',
    email: ''
}

// const GET_USER = 'GET_USER'
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = 'LOGOUT_USER';

export function loginUser(user){
    return {
        type: LOGIN_USER,
        payload: user 
    }
}

export function logoutUser() {
    return {
      type: LOGOUT_USER,
      payload: initialState
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case LOGIN_USER:
            return {...state, userId: action.payload.userId, username: action.payload.username, profilePic: action.payload.profilePic, isLoggedIn: true}
        case LOGOUT_USER:
            return initialState; 
        default:
            return state;
    }
}