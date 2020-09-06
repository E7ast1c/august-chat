import { combineReducers } from 'redux'
import {usersReducer as users} from './users'

const rootReducer = combineReducers({
    users
  })
  
  export default rootReducer