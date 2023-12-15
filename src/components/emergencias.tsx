"use client";

import { useGetEmergenciasQuery } from "@/redux/services/features/emergenciasApi";

interface Location {
    container: string;
    address: string;
    floor: string;
    lat: string;
    long: string;
}
  
interface Type {
    code: string;
    typeReport: string;
}
  
interface User {
    gender: string;
    mobilephone: string | null;
    name: string;
    nickname: string | null;
    email: string;
}
  
interface Status {
    completed: string | null;
    state: string;
    asigned: string | null;
}
  
interface ReportProps {
    id: string;
    createdAt: string;
    type: Type;
    asignation: string;
    completed: string;
    agent: string;
    location: Location;
    user: User;
    status: Status;
}

const Reportes: React.FC = ()  => {
    const { data, isLoading, isError, error } = useGetEmergenciasQuery(null, { pollingInterval: 15000 });

    const completedReports = data?.filter((report: ReportProps) => report.status.state === 'Completed');

    const alternatingRowClass = (index: number) =>  (index % 2 === 0 ? "bg-grayblue-100" : "bg-white") ;

    return isLoading ? <div>Loading...</div> : isError ? <div>{`${error}`}</div> : (
        <div className="absolute mt-[45px] ml-20 2xl:ml-[120px] w-[1120px] 2xl:w-[1480px] h-[373px] 2xl:h-[420px] rounded-lg bg-white overflow-hidden">
            <h4 className="text-lg ml-4 2xl:ml-6 mt-6 mb-6 text-grayblue-700 font-roboto font-semibold">
                Historial de reportes de emergencias
            </h4>
            <div className="w-full h-[40px] 2xl:h-[50px] mb-4 gap-4 flex items-center">
                <input
                    type="text"
                    className="ml-4 2xl:ml-6 mb-4 w-[1088px] 2xl:w-[1432px] h-[40px] 2xl:h-[50px] p-[8px 16px] border rounded-lg"
                    placeholder="    Buscar por fecha o tipo de reporte"
                />
            </div>
            <div className="border rounded-lg mb-4 ml-4 2xl:ml-[18px] w-[1088px] 2xl:w-[1432px] overflow-auto  max-h-[278px] text-sm bg-white text-center ">
                <table className="w-full divide-y divide-grayblue-100 mt-[-3px] ">
                    <thead className="h-[48px] 2xl:h-[72px]">
                        <tr className="font-roboto font-semibold text-sm divide-x">
                            <th className="w-[218px] 2xl:w-[248px] divide-x divide-grayblue-100">Fecha y Hora de reporte</th>
                            <th className="w-[218px] 2xl:w-[248x] divide-x divide-grayblue-100">Reporte</th>
                            <th className="w-[218px] 2xl:w-[248px] divide-x divide-grayblue-100">Asignacion</th>
                            <th className="w-[218px] 2xl:w-[248px] divide-x divide-grayblue-100">Completada</th>
                            <th className="w-[218px] 2xl:w-[248px] divide-x divide-grayblue-100">Agente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            completedReports?.map((report: ReportProps, index: number | any) => (
                                <tr key={report.id} className={`${alternatingRowClass(index)} h-[56px] divide-x divide-grayblue-100`}>
                                    <td>{report.createdAt || "-"}</td>
                                    <td className="text-sm font-semibold font-roboto">{report.type.typeReport || "-"}</td>
                                    <td>{report.status.asigned || "-"}</td>
                                    <td>{report.status.completed || "-"}</td>
                                    <td>{report.agent || "-"}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Reportes;