import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import modulesReducer from './modules/modulesReducer'
import expertReducer from './experts/expertsReducer'
import moduleDetailReducer from './moduleDetails/moduleDetailsReducer'
import { chapterReduxReducer } from './chapterSelect/chapterRedux'
import { getModules, getExperts } from './index'

const rootReducer = combineReducers({
    courceDetails: modulesReducer,
    experts: expertReducer,
    moduleDetail: moduleDetailReducer,
    chapter: chapterReduxReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

store.dispatch(getModules())
store.dispatch(getExperts())

store.subscribe(() => { })

export default store