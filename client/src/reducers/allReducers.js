import {combineReducers} from 'redux'
import studySpots from './studySpotsReducer'

const allReducers = combineReducers({
    studySpots: studySpots
    
})

export default allReducers