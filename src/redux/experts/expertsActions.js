import axios from 'axios'
import {
    GET_EXPERTS_LIST_REQUEST,
    GET_EXPERTS_LIST_SUCCESS,
    GET_EXPERTS_LIST_FAILED,
} from './expertsActionTypes'
import {
    expertsUrl
} from '../../Constants'

axios.defaults.headers.common['hk-access-token'] = '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f'

const getExpertsRequest = () => {
    return {
        type: GET_EXPERTS_LIST_REQUEST
    }
}

const getExpertsSuccess = (data) => {
    return {
        type: GET_EXPERTS_LIST_SUCCESS,
        payload: data
    }
}

const getExpertsFailed = (error) => {
    return {
        type: GET_EXPERTS_LIST_FAILED,
        error: error
    }
}

export const getExperts = () => {
    return function(dispatch) {
        dispatch(getExpertsRequest())
        axios.get(expertsUrl)
        .then(response => {
            dispatch(getExpertsSuccess(response.data.expertDetails))
        }).catch(error => {
            dispatch(getExpertsFailed(error))
        })
    }
}

