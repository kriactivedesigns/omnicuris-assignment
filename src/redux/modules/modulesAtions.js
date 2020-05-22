import axios from 'axios'
import {
    GET_MODULES_LIST_REQUEST,
    GET_MODULES_LIST_SUCCESS,
    GET_MODULES_LIST_FAILED,
} from './modulesActionTypes'
import {
    modulesListUrl
} from '../../Constants'

axios.defaults.headers.common['hk-access-token'] = '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f'

const getModulesListRequest = () => {
    return {
        type: GET_MODULES_LIST_REQUEST
    }
}

const getModulesListSuccess = (data) => {
    return {
        type: GET_MODULES_LIST_SUCCESS,
        payload: data
    }
}

const getModulesListFailed = (error) => {
    return {
        type: GET_MODULES_LIST_FAILED,
        error: error
    }
}

export const getModules = () => {
    return function (dispatch) {
        dispatch(getModulesListRequest)
        axios.get(modulesListUrl)
        .then(response => {
            dispatch(getModulesListSuccess(response.data.courseDetails))
        }).catch(error => {
            dispatch(getModulesListFailed(error))
        })
    }
}