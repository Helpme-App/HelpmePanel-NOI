import { useGetEmergenciasQuery } from "@/redux/services/features/emergenciasApi";
import { setMark } from "@/redux/services/features/MapSlice";
import { useAppDispatch } from "@/redux/hooks";


const EmergencyCard = () => {
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

    
    const dispatch = useAppDispatch();

    const {data, error, isLoading} = useGetEmergenciasQuery(null, {
        pollingInterval: 15000,
      });  

   

    const pendingReports = data?.filter((report: ReportProps | any) => report.status.state === "Pending");
    
    
    const determineColorClass = (colorClass: string) => {
        switch (colorClass) {
            case "Azul":
                return "border-blue-200";
            case "Rojo":
                return "border-red-200";
            case "Amarillo":
                return "border-yellow-200";
            case "Otro":
                return "border-gray-200";
    }
};

    const sortedReports = pendingReports?.sort((a: ReportProps , b: ReportProps) => {
        const colorOrder = ["Rojo", "Amarillo", "Azul", "Otro"];
        return colorOrder.indexOf(a.type.code) - colorOrder.indexOf(b.type.code);
  });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error){
      return <div>{`${error}`}</div>;
    }

    return(
     <div>
       {
        sortedReports?.map((emergency: ReportProps)=>{
            return(
                <div key={emergency.id} 
                className={`${determineColorClass(emergency.type.code)}  rounded-lg  border-2 flex flex-row items-center grid-cols-2 p-2 m-2 cursor-pointer`} 
                onClick={()=>{dispatch(setMark({lat: emergency.location.lat, lng: emergency.location.long}))}}
                >
                    <div className=" flex flex-col items-start h-full w-full ">
                    <h1>{emergency.user.name} </h1>
                    <p className="text-sm font-bold">{`Emergencia - Codigo ${emergency.type.code}`}</p>
                    </div>
                    <div className="">
                    <p className="text-xs">{emergency.createdAt}</p>
                    </div>
                </div>
            )
        })
       }
     </div>
    )
     

    }
    export default EmergencyCard;
