import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import modulesReducer from './modules/modulesReducer'

const rootReducer = combineReducers({
    courceDetails: modulesReducer
})

const store =createStore(rootReducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {})

export default store