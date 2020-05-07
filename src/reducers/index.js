import {combineReducers} from 'redux'

// Reducer
import InfoReducer from './InfoReducers'

// Menghubungkan reducer dengan state
export default combineReducers(
   // Global State
   {
      info  : InfoReducer
   }
)
