import {
    GET_EXPERTS_LIST_REQUEST,
    GET_EXPERTS_LIST_SUCCESS,
    GET_EXPERTS_LIST_FAILED,
} from './expertsActionTypes'

const initialState = {
    loading: false,
    error: '',
    experts: undefined
}

const expertsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_EXPERTS_LIST_REQUEST: {
            return {
                ...state,
                experts: undefined,
                loading: true,
                error: ''
            }
        }

        case GET_EXPERTS_LIST_SUCCESS: {
            return {
                ...state,
                experts: action.payload,
                error: '',
                loading: false
            }
        }

        case GET_EXPERTS_LIST_FAILED: {
            return {
                ...state,
                experts: undefined,
                error: action.error,
                loading: false
            }
        }

        default: return state
    }
}
export default expertsReducer