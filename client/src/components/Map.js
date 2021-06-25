import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {createStudySpot} from '../actions/actions'
import {useSelector, useDispatch} from 'react-redux'

const Map = () => {

    const studySpots = useSelector(state => state.studySpots).studySpots

    const [markers, setMarkers] = useState([])

    useEffect(() => {
        
        var newMarkers = []
        for (var i=0; i < studySpots.length; i++){
            const markerIndex = newMarkers.findIndex(el => el.location === studySpots[i].location)
 
            if (markerIndex === -1) {
                const newLocationMarker = {location: studySpots[i].location, coordinates: studySpots[i].coordinates, studySpots: []}
                
                newMarkers.push(newLocationMarker)
            } else {
                newMarkers[markerIndex].studySpots.push(studySpots[i])
            }
        }
        setMarkers(newMarkers)
        
    }, [studySpots])

    return (

        <div className="map-container">
            <div className="map">
                <MapContainer
                    center={[43.66312, -79.39561]}
                    zoom={15.5}
                    scrollWheelZoom={true}
                    style={{ height: '100%', width: '100%' }}
                    >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                
                </MapContainer>
            </div>
        </div>
        
    )
}

export default Map
