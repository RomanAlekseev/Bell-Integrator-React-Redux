import { combineReducers } from 'redux'
import { organizationReduser } from './organization'
import { userReducer } from './user'

export const rootReducer = combineReducers({
    oraganization: organizationReduser,
    user: userReducer,
})