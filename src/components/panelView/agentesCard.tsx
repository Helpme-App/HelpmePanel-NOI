"use client"

import React from "react";
import { useGetAgentesQuery } from "@/redux/services/features/agentesApi";


const AgentCardPanel = () => {

    interface AgentesCardProps {
        nombre: string;
        identificacion: string;
        contacto: string;
        estado: string;
    };


    const {data, error, isLoading} = useGetAgentesQuery(null, {
        pollingInterval: 15000,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{`${error}`}</div>;
    }

    return (
        
        <div>
            <h4 className="font-roboto text-lg font-semibold mb-4">Agentes disponibles</h4>
            {
            data?.map((agente: AgentesCardProps) => (
        <div className="w-full h-[66px] border-2 border-gray-200 rounded-lg mb-4 px-4 py-4">
          <div className="flex justify-between">
            <div className="flex">
              <img className="w-[35px] h-[35px] mr-2" src="photo-user.svg"></img>
              <h4 className="font-roboto text-grayblue-900 text-base font-bold">
                {agente.nombre}
              </h4>
              <h4 className=" ml-4 font-roboto text-grayblue-200 text-base font-semibold">
                {agente.identificacion}
              </h4>
            </div>
              <h4 className="font-roboto text-grayblue-900 text-sm font-semibold">
                {agente.estado}
              </h4>
            </div>
            <div className="">
              <h4 className="flex font-roboto text-grayblue-900 text-sm font-bold ml-[5.5%] mt-[-2%] ">
                <img className="w-[15px] h-[15px] mt-[1px]" src="phone.svg"></img>
                {agente.contacto}
              </h4>
            </div>
        </div>
      ))}
    </div>
        
    );
};

export default AgentCardPanel;
