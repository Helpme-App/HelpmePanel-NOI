import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useAppSelector } from '@/Redux/hooks';



const Mapview = () => {
  const mark = useAppSelector((state) => state.markReducer.marker)
  

    const defaultCenter = {
        lat: 6.2470190513727,
        lng: -75.56670611397378
    }

    const center = {
      lat: Number(mark.markReducer.Marker.lat),
      lng: Number(mark.markReducer.Marker.lng)
    }
  

   
   
    return (
        <div className="container">
            <h2>Ubicación del reporte</h2>
            <div className="map">
              <GoogleMap
              zoom={13}
              center={ center ? center : defaultCenter}
              mapContainerStyle={{ width: '100%', height: '100%' }}
              mapContainerClassName="map-container"
              >
                 {center && <Marker position={center} />  }
              </GoogleMap>
            </div>
        </div>
    )
};


export default Mapview