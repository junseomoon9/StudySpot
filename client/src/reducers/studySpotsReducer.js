
const INITIAL_STATE = {
    studySpots:[]
}

const studySpots = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case "CREATE_STUDYSPOT":
          return {...state, studySpots: [...state.studySpots, action.payload]}
      case "DELETE_STUDYSPOT":
          return null;
     default: 
        return state
    }
  }

  export default studySpots