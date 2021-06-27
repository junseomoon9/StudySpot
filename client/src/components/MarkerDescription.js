import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

const MarkerDescription = () => {

    const studySpot = useSelector(state => state.studySpotsReducer).viewStudySpot

    return (
        <div className="marker-description-container">
          <h1 className="marker-description-title">View StudySpot Info</h1>
          <div className="marker-description-information-container">
              <h2><b>Location: </b>{studySpot.location}</h2>
              <h2><b>Floor: </b> {studySpot.floor}</h2>
              <h2><b>Course Code: </b> {studySpot.courseCode}</h2>
              <h2><b>Seats Occupied: </b> {studySpot.occupiedSeats}/{studySpot.totalSeats}</h2>
              <h2><b>Description: </b> {studySpot.description}</h2>
          </div>
        </div>
    )
}

export default MarkerDescription
