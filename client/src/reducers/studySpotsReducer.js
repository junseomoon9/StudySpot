
const INITIAL_STATE = {
    studySpots:[],
    courseCode: "All",
    myStudySpot: {},
    viewStudySpot: {}
}

const studySpotsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case "CREATE_STUDYSPOT":
          return {
              ...state,
              studySpots: [...state.studySpots, action.payload],
              myStudySpot: action.payload
            }
      case "DELETE_STUDYSPOT":
          return null;
      case "CHANGE_COURSE_CODE_SELECTION":
          return {...state, courseCode: action.payload}
      case "CHANGE_VIEW_STUDYSPOT":
          return {...state, viewStudySpot: action.payload}
     default: 
        return state
    }
  }

  export default studySpotsReducer