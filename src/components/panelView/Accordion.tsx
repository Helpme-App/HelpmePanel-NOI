import React from 'react'
import { useState } from 'react';

export default function Accordion({emergency }: any) {

    const [ openReport, setOpenReport] = useState(false);

    const changeAccordion = () => {
        setOpenReport(!openReport);
    }
    
    const determineBackgroundClass = (colorClass: string) => {
      switch (colorClass) {
          case "Azul":
              return "bg-blue-100";
          case "Rojo":
              return "bg-red-100";
          case "Amarillo":
              return "bg-yellow-100";
          case "Otro":
              return "bg-white";
  }
};

  return (
  <div 
  onDoubleClick={() => changeAccordion()}>
      
      {/*Header*/} 
      <div className={`flex flex-row items-center`}>
        <div className={`${determineBackgroundClass(emergency.type.color)}flex flex-col items-start h-full w-full`}>
          <h1>{emergency.user.name} </h1>
          <p className="text-sm font-bold">{`Emergencia - Codigo ${emergency.type.code}`}</p>
        </div>
        <div className ="flex flex-col items-end">
          <p className="text-xs w-full">{emergency.createdAt}</p>
        </div>  
      </div>

     {/*Body*/}  
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${openReport ? "grid-rows-[1fr] opacity-100" : " grid-rows-[0fr] opacity-0" }` }>
        <div className="overflow-hidden">

          {/*Emer info section*/}
          <div>
            <div className='p-2 text-sm'>
              <h5 className='font-bold margin-2'>Ubicación</h5>
              <p>{`Modulo ${emergency.location.container}${emergency.location.floor} - ${emergency.location.address}`}</p>
            </div>
            <div className='p-2 text-sm'>
              <h5 className='margin-2 font-bold'>Observación</h5>
              <p className="text-sm">{emergency.observations}</p>
            </div>
          </div>

          {/*User info section*/}
          <div className="flex flex-row  items-center">
            <div className="flex flex-row pl-4 gap-2">
              <img src="Mail.svg" alt='mail img'/>
              <p className='text-sm font-medium'>{emergency.user.email}</p>
            </div>
            <div className="flex flex-row pl-4 gap-2">
              <img src="User-Phone.svg" alt='phone' /> 
              <p className='text-sm font-medium '>{emergency.user.mobilephone}</p>
            </div>
          </div>

          {/*Agents Actions Section*/}
          <div>
            <div className="p-2 text-sm">
              <h5 className='font-bold margin-2'>Agente</h5>
            </div>
            <select name="agents" id="">
              <option value="camilo">camilo</option>
              <option value="camilo">oscar</option>
              <option value="alex">alex</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
