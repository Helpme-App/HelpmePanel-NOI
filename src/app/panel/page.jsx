"use client"

import Mapview from '@/components/MapView'
import EmerContainer from '@/components/EmerContainer';
import { useLoadScript} from '@react-google-maps/api';
import Nav from '@/components/Nav';




export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
})


if(!isLoaded) return <div>Loading...</div>
  return (
    <>
     <div className="home-container">
      <div>
        <Nav />
      </div>

      <div>
       <Mapview />
      </div>

      <div>
       <EmerContainer/>
      </div>

     </div>
    </>
  )
   
}