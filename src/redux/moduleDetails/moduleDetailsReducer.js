import {
    GET_MODULES_DETAILS_REQUEST,
    GET_MODULES_DETAILS_SUCCESS,
    GET_MODULES_DETAILS_FAILED
} from './moduleDetailsActionTypes'

const initialState = {
    loading: false,
    lessonDetails: undefined,
    quizDetails: undefined,
    error: ''
}

const moduleDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case GET_MODULES_DETAILS_REQUEST : {
            return {
                ...state,
                loading: true,
                lessonDetails: undefined,
                quizDetails: undefined,
                error: ''
            }
        }

        case GET_MODULES_DETAILS_SUCCESS : {
            return {
                ...state,
                loading: false,
                lessonDetails: action.payload.lessonDetails,
                quizDetails: action.payload.quizDetails,
                error: ''
            }
        }

        case GET_MODULES_DETAILS_FAILED : {
            return {
                ...state,
                loading: false,
                lessonDetails: undefined,
                quizDetails: undefined,
                error: action.error
            }
        }

        default: return state
    }
}

export default moduleDetailReducer