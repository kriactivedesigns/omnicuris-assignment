import axios from 'axios'
import {
    GET_MODULES_DETAILS_REQUEST,
    GET_MODULES_DETAILS_SUCCESS,
    GET_MODULES_DETAILS_FAILED
} from './moduleDetailsActionTypes'
import {
    moduleDetailsUrl
} from '../../Constants'

axios.defaults.headers.common['hk-access-token'] = '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f'

const getModuleDetailsRequest = () => {
    return {
        type: GET_MODULES_DETAILS_REQUEST
    }
}

const getModuleDetailsSuccess = (data) => {
    return {
        type: GET_MODULES_DETAILS_SUCCESS,
        payload: data
    }
}

const getModuleDetailsFailed = (error) => {
    return {
        type: GET_MODULES_DETAILS_FAILED,
        error: error
    }
}

export const getModuleDetails = (id) => {
    return function(dispatch) {
        dispatch(getModuleDetailsRequest())
        axios.get(moduleDetailsUrl+id)
        .then(response => {
            dispatch(getModuleDetailsSuccess(response.data))
        }).catch(error => {
            dispatch(getModuleDetailsFailed(error))
        })
    }
}