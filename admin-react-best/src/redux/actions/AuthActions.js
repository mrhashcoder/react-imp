import ActionTypes from '../action_types'
import axios from '../api/axios';
import EndPoints from '../api/end_points';

export const userSignup = (authToken) => async (dispatch) => {
    const response = await axios.get(EndPoints.signup , data = {}).catch(err => {

    });
    console.log(response.data)

    dispatch({
        type : ActionTypes.LOGIN_SUCCESS,
        payload : response.data
    })
}
