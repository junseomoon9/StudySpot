const router = require('express').Router()
const StudySpot = require('../models/StudySpot');

router.post('/addStudySpot', async(req, res) => {
    console.log(req.body)
    const studyspot = new StudySpot({
        location: req.body.location,
        floor: req.body.floor,
        courseCode: req.body.courseCode,
        occupiedSeats: req.body.occupiedSeats,
        totalSeats: req.body.totalSeats,
        description: req.body.description,
        coordinates: req.body.coordinates
    })

    try {
        const savedStudySpot = await studyspot.save()
        res.send(savedStudySpot)
    } catch(err) {
        res.status(400).send(err)
    }
})

router.post('/deleteStudySpot', async (req,res) => {
    await StudySpot.deleteOne({_id: req.body._id})
    res.sendStatus(200)
})

router.post('/getAllStudySpots', async (req, res) => {

    const studyspots = await StudySpot.find({})
    console.log(studyspots)
    try {
        res.json({studyspots: studyspots})
    } catch (err){
        res.status(400).send(err)
    }
})

router.post('/increaseOccupiedSeats', async (req, res) => {
    await StudySpot.findOneAndUpdate({_id: req.body._id}, {occupiedSeats: req.body.occupiedSeats + 1})
    res.send(200)
})

router.post('/decreaseOccupiedSeats', async (req, res) => {
    await StudySpot.findOneAndUpdate({_id: req.body._id}, {occupiedSeats: req.body.occupiedSeats - 1})
    res.send(200)
})

module.exports = router;

