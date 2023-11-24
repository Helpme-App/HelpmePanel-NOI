import React from 'react';
import { useGetReportsQuery } from '@/Redux/services/ReportAPI';
import Image from 'next/image';
import Phone from '../../assets/Phone.svg'
import Mail from '../../assets/Mail.svg'
import { useAppDispatch } from '@/Redux/hooks';
import { setMark } from '@/Redux/features/MapSlice';

const EmerCard = () => {
    const {data, error, isloading} = useGetReportsQuery(null, {
        pollingInterval: 15000,
      });  
      
      console.log(data)
      
      
    
      if(isloading) return <div>Loading...</div>
      if(error) return <div>Error</div>

      const dispatch = useAppDispatch();
   

    return (
        <div >
            {
                data?.map((report)=>(
                    <div 
                    key={report.id} 
                    className='emergency-card' 
                    onClick={()=>{dispatch(setMark(({lat: report.location.lat, lng: report.location.long})))}}>
                       
                       <div className='emergency-card-header'>
                           <p className='emergency-card-name'>Alex Benavides</p>
                           <h6 className='emergency-card-name'>{`Emergencia - Código ${report.type.code}`} </h6>
                       </div>
                       <div className='emergency-card-body'>
                         <h5 className='ubication-text'>Ubicación</h5>
                         <p className='address'>{`Modulo ${report.location.container}${report.location.floor} - ${report.location.address}`}</p>
                       </div>
                       <div className='emergency-card-body'>
                         <h5 className='ubication-text'>Observación</h5>
                         <p className='address'>{report.observations}</p>
                       </div>
                       <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                         <div className='phone-email'>
                           <Image src={Mail} alt={'mail'}/>
                           <p className='mail-number'>alexbenavides28@gmail.com</p>
                         </div>
                         <div className='phone-email'>
                           <Image src={Phone} alt={'phone'} /> 
                           <p className='mail-number'>317 4100557</p>
                        
                         </div>
                       </div>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default EmerCard