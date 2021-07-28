import ActionTypes from "redux/action_types";

const intialState = {
    auth_token : "",
    user : {
        email : "",
        username : ""
    },
    is_logged_in : true,
};

const authReducer = (state = intialState , action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS : {
            return {
                auth_token : action.payload.auth_token,
                user : action.payload.user,
                is_logged_in : true
            }
        }
        case ActionTypes.LOGIN_FAIL: {
            return {
                auth_token : "",
                user : {},
                is_logged_in : false
            }
        }
        case ActionTypes.LOGOUT : {
            return {
                intialState
            }
        }
        default:
            return state
    }
}

export default authReducer;
