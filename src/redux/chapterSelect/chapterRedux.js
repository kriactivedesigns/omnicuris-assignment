const SET_DATA = "SET_DATA"

export const setChapterData = (data) => {
    return {
        type: SET_DATA,
        payload: data
    }
}

const initialState = {
    chapter: undefined
}

export const chapterReduxReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_DATA: {
            return {
                ...state,
                chapter: action.payload
            }
        }

        default: return state
    }
}