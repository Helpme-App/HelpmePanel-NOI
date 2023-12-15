"use client"

import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useAppSelector } from '../../redux/hooks';



const Mapview = () => {
  const mark = useAppSelector((state) => state.markReducer.Marker)
  

    const defaultCenter = {
        lat: 6.2470190513727,
        lng: -75.56670611397378
    }

     const center = {
       lat: Number(mark.lat),
       lng: Number(mark.lng)
    } 
   
    return (
        <div className="flex flex-col w-[750px] h-[500px] rounded-lg bg-white p-4 gap-2 mt-[45px] ml-20 2xl:ml-[120px]">
            <h1 className="text-lg text-grayblue-700 font-roboto font-extrabold">Ubicación del reporte</h1>
            <div className="w-100% h-screen">
              <GoogleMap
              zoom={13}
              center={ center ? center : defaultCenter}
              mapContainerStyle={{ width: '100%', height: '100%' }}
              mapContainerClassName="rounded-lg"
              >
                 {center && <Marker position={center} />  }
              </GoogleMap>
            </div>
        </div>
    )
};


export default Mapview