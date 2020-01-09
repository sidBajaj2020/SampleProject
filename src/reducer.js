const initialState = {
    loggedIn: false, 
    userName: undefined
}; 

export default function (state = initialState, action){
    if (action.type === 'LOGIN_USER'){
        return {...state, loggedIn: true, userName:action.userName}
    } else if (action.type === 'LOGOUT_USER'){
        return {...state, loggedIn: false, userName: undefined}
    }
    return state; 
}