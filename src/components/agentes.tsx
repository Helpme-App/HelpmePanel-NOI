"use client";

import React, { useState } from "react";
import CreateAgent from "./newAgentModal";
import { useGetAgentesQuery,
useModifyAgentesMutation,
useDeleteAgentesMutation } from "@/redux/services/features/agentesApi";

interface AgentesProps {
    id: string;
    nombre: string;
    identificacion: string;
    cargo: string;
    contacto: string;
    estado: string;
}

const Agentes: React.FC<{agentes: AgentesProps[]}> = ({agentes}) => {

    const [estadoSwitch, setEstadoSwitch] = useState(
        agentes.map(() => false)
    );

    const { data: agentesData, error: agentesError, isLoading: agentesLoading } = useGetAgentesQuery( { skip: !agentes } );
    const [modifyAgentes, { isLoading: modifyAgentesLoading }] = useModifyAgentesMutation();
    const [deleteAgentes, { isLoading: deleteAgentesLoading }] = useDeleteAgentesMutation();

    const [isCreateAgentModalOpen, setCreateAgentModalOpen] = useState(false);

    const openCreateAgentModal = () => {
        setCreateAgentModalOpen(true);
    };

    const closeCreateAgentModal = () => {
        setCreateAgentModalOpen(false);
    };

    const alternatingRowClass = (index: number) =>  (index % 2 === 0 ? "bg-grayblue-100" : "bg-white") ;

    const handleEditAgent = async (id: string) => {
        try {
            const updatedAgent = {
                id: id,
                nombre: 'Nombre',
                identificacion: 'Identificacion',
                cargo: 'Cargo',
                contacto: 'Contacto',
                estado: 'Estado',
            };
            await modifyAgentes({updatedAgent});
            console.log(`Editando agente ${id}`);
        } catch (error) {
            console.log(error, 'Error editando agente');
        }
    };

    const handleDeleteAgent = async (id: string) => {
        try {
            await deleteAgentes(id);
            console.log(`Borrando agente ${id}`);
        } catch (error) {
            console.log(error, 'Error borrando agente');
        }
    };

    const handleSwitchChange = (index: number) => {
        setEstadoSwitch((prevState) => {
            const newState = [...prevState];
            newState[index] = !prevState[index];
            return newState;
        });
    }

    return (
        <div className="absolute mt-[45px] ml-20 2xl:ml-[120px] w-[1120px] 2xl:w-[1480px] h-[373px] 2xl:h-[420px] rounded-lg bg-white overflow-hidden">
        <h4 className="text-lg ml-4 2xl:ml-6 mt-6 mb-6 text-grayblue-700 font-roboto font-semibold">
            Administrar agentes
        </h4>
        <div className="w-full h-[40px] 2xl:h-[50px] mb-4 gap-4 flex items-center">
            <input
            type="text"
            className="ml-4 2xl:ml-6 mb-4 w-[1088px] 2xl:w-[1432px] h-[40px] 2xl:h-[50px] p-[8px 16px] border rounded-lg"
            placeholder="    Buscar por nombre, documento o cargo"
        />
            <i className="absolute ml-[78%] 2xl:ml-[78%] mt-[-12px] cursor-pointer ">
            <img src="/search-agent.svg" className="w-[24px] 2xl:w-[36px] h-[24px] 2xl:h-[36px] " />
            </i>

            <button className="w-[201px] 2xl:w-[302px] h-[40px] 2xl:h-[50px] mr-4 mt-[-18px] rounded-lg gap-2 p-[6px 6px 6px 8px] bg-pink-400 relative"
                    onClick={openCreateAgentModal}
            >
            <img className="w-[24px] 2xl:w-[36px] h-[24px] 2xl:h-[36px] absolute" src="/add-user.svg" />
            <span className="font-roboto text-sm font-medium text-white gap-[10px] ml-6">
                Crear Nuevo Agente
            </span>
            </button>
            <CreateAgent isOpen={isCreateAgentModalOpen} onClose={closeCreateAgentModal} />
        </div>
        <div className="border rounded-lg mb-4 ml-4 2xl:ml-4 w-[1088px] 2xl:w-[1432px] overflow-auto  max-h-[278px] text-sm bg-white text-center ">
        <table className="w-full divide-y divide-grayblue-100 mt-[-3px] ">
            <thead className="h-[48px] 2xl:h-[72px]">
            <tr className="font-roboto font-semibold text-sm divide-x">
                <th className="w-[64px] 2xl:w-[96px] divide-x divide-grayblue-100">Foto</th>
                <th className="w-[184.8px] 2xl:w-[278x] divide-x divide-grayblue-100">Nombre</th>
                <th className="w-[184.8px] 2xl:w-[278px] divide-x divide-grayblue-100">Identificación</th>
                <th className="w-[184.8px] 2xl:w-[278px] divide-x divide-grayblue-100">Cargo</th>
                <th className="w-[184.8px] 2xl:w-[278px] divide-x divide-grayblue-100">Contacto</th>
                <th className="w-[184.8px] 2xl:w-[278px]divide-x divide-grayblue-100">Estado</th>
                <th className="w-[100px] 2xl:w-[150px]">Acciones</th>
            </tr>
            </thead>
            <tbody>
                {
                    agentes.map((agente, index) => (
                        <tr key={agente.id} className={`${alternatingRowClass(index)} h-[56px] divide-x divide-grayblue-100`}>
                            <td className="w-[32px] 2xl:w-[48px] h-[32px] 2xl:h-[48px]">
                                <img className="w-[32px] 2xl:w-[48px] h-[32px] 2xl:h-[48px] ml-3 2xl:ml-4 divide-x divide-grayblue-100" src="photo-user.svg" />
                            </td>
                            <td>{agente.nombre}</td>
                            <td>{agente.identificacion}</td>
                            <td>{agente.cargo}</td>
                            <td>{agente.contacto}</td>
                            <td className="divide-x divide-grayblue-100">

                                <div className="flex justify-end">
                                <input
                                        type="checkbox"
                                        checked={estadoSwitch[index]}
                                        onChange={() => handleSwitchChange(index)}
                                        className={`mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-grayblue-300
                                        before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] 
                                        after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none 
                                        after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] 
                                        after:transition-[background-color_0.2s,transform_0.2s] after:content-['']
                                        checked:bg-pink-200 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 
                                        checked:after:w-5 checked:after:rounded-full checked:after:border-none 
                                        checked:after:bg-pink-400 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] 
                                        checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer
                                        focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] 
                                        focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 
                                        focus:after:rounded-full focus:after:content-[''] checked:focus:border-pink-400 checked:focus:bg-pink-200 checked:focus:before:ml-[1.0625rem] 
                                        checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] 
                                        checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]`}
                                        />
                                        <label htmlFor="switch-checkbox" className="switch-label">
                                            <span className="switch-inner"/>
                                            <span className="switch-switch"/>
                                        </label>
                                </div>

                                </td>


                            <td className="divide-x divide-gray-300">
                                <button onClick={() => handleEditAgent(agente.id)} style={{ marginRight: '16px'}}>
                                    <img className="w-[24px] 2xl:w-[32px] h-[24px] 2xl:h-[48px]" src="iconamoon_edit.svg" alt="Editar" />
                                </button>
                                <button onClick={() => handleDeleteAgent(agente.id)}>
                                    <img className="w-[24px] 2xl:w-[32px] h-[24px] 2xl:h-[48px]" src="uil_trash.svg" alt="Borrar" />
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
        </div>
    )

};

export default Agentes;
