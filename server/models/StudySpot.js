const mongoose = require('mongoose')

const studyspotSchema = new mongoose.Schema({
    location: String,
    floor: Number,
    courseCode: String,
    occupiedSeats: Number,
    totalSeats: Number,
    description: String,
    coordinates: {lat: Number, lon: Number}
})

module.exports = mongoose.model('StudySpot', studyspotSchema, 'studyspots')