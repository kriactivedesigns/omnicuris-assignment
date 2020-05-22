import {
    GET_MODULES_LIST_REQUEST,
    GET_MODULES_LIST_SUCCESS,
    GET_MODULES_LIST_FAILED,
} from './modulesActionTypes'

const intialState = {
    courceDetails: undefined,
    loading: false,
    error: ''
}

const modulesReducer = (state = intialState, action) => {
    switch(action.type){
        case GET_MODULES_LIST_REQUEST: {
            return {
                ...state,
                loading: true,
                error: '',
                courceDetails: undefined
            }
        }

        case GET_MODULES_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                courceDetails: action.payload,
                error: ''
            }
        }
        
        case GET_MODULES_LIST_FAILED: {
            return {
                ...state,
                loading: false,
                courceDetails: undefined,
                error: action.error
            }
        }

        default: {
            return state
        }
    }
}

export default modulesReducer