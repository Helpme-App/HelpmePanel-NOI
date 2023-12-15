import React, { useState }  from "react";
import Modal from 'react-modal';
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./input";
import { useCreateAgentesMutation } from "../redux/services/features/agentesApi";

interface CreateAgentProps {
    isOpen: boolean;
    onClose: () => void;
};

type Inputs = {
    name: string;
    lastname: string;
    documentType: string;
    DNI: number
    position: string;
    cellphone: number;
    image: string;
};

const CreateAgent : React.FC<CreateAgentProps> = ({ isOpen, onClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        } = useForm<Inputs>();
        const [modalIsOpen, setModalIsOpen] = useState(false);
        const [camposLlenos, setCamposLlenos] = useState(false);
        const [ addAgent ] = useCreateAgentesMutation();

    

    const onSubmit: SubmitHandler<Inputs> = async (inputsData) => {
        try {
            console.log(inputsData);
            await addAgent(inputsData).unwrap();
            setModalIsOpen(true);
        } catch (error) {
            console.error('Error al crear agente', error)
        }
    };


    return (
            <Modal isOpen={isOpen} onRequestClose={onClose}>
        <div className="fixed inset-0 z-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white rounded-lg w-[582px] h-[440px] mt-[124-px] ml-[100px] p-[32px 16px 16px 32px]">
                <div className="flex" >
                    <h4 className="font-roboto text-lg font-bold text-rigth font-grayblue-700 mt-8 mb-6 ml-4">Creacion de nuevo agente</h4>
                    <button onClick={onClose} className="bg-white border-none outline-none justify-end ml-[300px] ">X</button>
                </div>
        <form>

        <div className="w-[550px] h-[63px] flex justify-between mb-4">
            <div className="form-group ml-4">
            <label className="font-roboto text-sm font-semibold" htmlFor="name">Nombre</label>
            <Input
                id=""
                inputColor="secondary"
                type="text"
                name="firstName"
                className="form-control w-[265px] h-[40px] border transition-all rounded-lg outline-none
                placeholder:font-grayblue-800 placeholder:opacity-50"
                register={register}
                registerOptions={{ required: true }}
                placeholder="   Ingresar nombres"
            />
            {errors.name && <span className="text-xs text-error">Este campo es requerido</span>}
            </div>


            <div className="form-group ml-4">
            <label className="font-roboto text-sm font-semibold" htmlFor="lastname">Apellido</label>
            <Input
                id=""
                inputColor="secondary"
                type="type"
                name="lastName"
                className="form-control w-[265px] h-[40px] border transition-all rounded-lg outline-none
                placeholder:font-grayblue-800 placeholder:opacity-50"
                register={register}
                registerOptions={{ required: true }}
                placeholder="   Ingresar apellido"
            />
            {errors.lastname && <span className="text-xs text-error">Este campo es requerido</span>}
            </div>
        </div>
        
        <div className="w-[550px] h-[63px] flex justify-between mb-4">
            <div className="form-group ml-4">
            <label className="font-roboto text-sm font-semibold" htmlFor="documentType">Tipo de Documento</label>
            <select
        className="form-control w-[265px] h-[40px] transition-all border border-pink-200 rounded-lg outline-none
        placeholder-font-grayblue-800 placeholder:opacity-50"
            {...register("documentType", { required: true })}
            >
                <option className="font-roboto text-xs text-grayblue-400 mb-1" value="">Seleccionar documento</option>
                <option className="font-roboto text-xs text-grayblue-400" value="Cédula de identidad">Cédula de identidad</option>
                <option className="font-roboto text-xs text-grayblue-400" value="Documento nacional de identidad">Documento nacional de identidad</option>
                <option className="font-roboto text-xs text-grayblue-400" value="Cédula de ciudadania">Cédula de ciudadania</option>
                <option className="font-roboto text-xs text-grayblue-400" value="Clave Única de Registro de Población">Clave Única de Registro de Población</option>
                <option className="font-roboto text-xs text-grayblue-400" value="Documento Personal de Identificación">Documento Personal de Identificación</option>
                <option className="font-roboto text-xs text-grayblue-400" value="Documentación único de identidad">Documentación único de identidad</option>
                <option className="font-roboto text-xs text-grayblue-400" value="Cédula de identidad y electoral">Cédula de identidad y electoral</option>
                <option className="font-roboto text-xs text-grayblue-400" value="Cédula de identidad personal">Cédula de identidad personal</option>
                <option className="font-roboto text-xs text-grayblue-400" value="Cédula de identidad civil">Cédula de identidad civil</option>
                <option className="font-roboto text-xs text-grayblue-400" value="Licencia de Identificaion">Licencia de Identificaion</option>
            </select>
            
            {errors.documentType && <span className="text-xs text-error">Este campo es requerido</span>}
            </div>


            <div className="form-group ml-4">
                <label className="font-roboto text-sm font-semibold" htmlFor="DNI">Número de Documento</label>
                <Input
                id=""
                inputColor="secondary"
                type="number"
                name="DNI"
                className="form-control w-[265px] h-[40px] border transition-all rounded-lg outline-none
                placeholder:font-grayblue-800 placeholder:opacity-50"
                register={register}
                registerOptions={{ required: true }}
                placeholder="   Ingresar documento"
            />
                {errors.DNI && <span className="text-xs text-error">Este campo es requerido</span>}
                </div>
                
            </div>
            <div className="w-[550px] h-[63px] flex justify-between mb-4">
                <div className="form-group ml-4">
                <label className="font-roboto text-sm font-semibold" htmlFor="position">Cargo</label>
                <Input
                id=""
                inputColor="secondary"
                type="text"
                name="position"
                className="form-control w-[265px] h-[40px] border transition-all rounded-lg outline-none
                placeholder:font-grayblue-800 placeholder:opacity-50"
                register={register}
                registerOptions={{ required: true }}
                placeholder="   Ingresar cargo"
            />
                {errors.position && <span className="text-xs text-error">Este campo es requerido</span>}
            </div>

            <div className="form-group ml-4">
            <label className="font-roboto text-sm font-semibold" htmlFor="cellphone">Celular</label>
            <Input
                id=""
                inputColor="secondary"
                type="number"
                name="cellphone"
                className="form-control w-[265px] h-[40px] border transition-all rounded-lg outline-none
                placeholder:font-grayblue-800 placeholder:opacity-50"
                register={register}
                registerOptions={{ required: true }}
                placeholder="   Ingresar celular"
            />
            {errors.cellphone && <span className="text-xs text-error">Este campo es requerido</span>}
            </div>
        </div>
                    <button type="submit"
                        onClick={handleSubmit(onSubmit)} 
                        className="btn btn-primary btn-block mt-5 border rounded-lg bg-pink-200 w-[550px] h-[40px] ml-4 text-white text-sm">
                        {camposLlenos ? "Guardar" : "Crear"}
                    </button>
                </form>

                <Modal isOpen={modalIsOpen}>
                    <h2>Agente creado exitosamente</h2>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                </Modal>
            </div>
            </div>
        </Modal>
    );
};

export default CreateAgent;
