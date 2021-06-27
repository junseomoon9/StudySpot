export const createStudySpot = (studySpot) => {
    return {
        type: 'CREATE_STUDYSPOT', payload: studySpot
    }
}

export const changeCourseCodeSelection = (courseCode) => {
    return {
        type: 'CHANGE_COURSE_CODE_SELECTION', payload: courseCode
    }
}

export const changeViewStudySpot = (studySpot) => {
    return {
        type: 'CHANGE_VIEW_STUDYSPOT', payload: studySpot
    }
}