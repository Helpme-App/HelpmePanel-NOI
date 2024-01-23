import { useGetEmergenciasQuery } from "@/redux/services/features/emergenciasApi";
import { setMark } from "@/redux/services/features/MapSlice";
import { useAppDispatch } from "@/redux/hooks";
import Accordion from "./Accordion";
import { log } from "console";


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
    observations: string;
    createdAt: string;
    type: Type;
    asignation: string;
    completed: string;
    agent: string;
    location: Location;
    user: User;
    status: Status;
}

const EmergencyCard = () => {
    
 
    // Redux toolkit
    const dispatch = useAppDispatch();

    //Fetching Data
    const {data, error, isLoading} = useGetEmergenciasQuery(null, {
        pollingInterval: 15000,
      });  

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error){
      return <div>{`${error}`}</div>;
    }

    console.log(data)

    //Filtering Data
    const pendingReports = data?.filter((report: ReportProps | any) => report.status.state === "Pending");

    //Sorting Data
    const sortedReports = pendingReports?.sort((a: ReportProps , b: ReportProps) => {
        const colorOrder = ["Rojo", "Amarillo", "Azul", "Otro"];
        return colorOrder.indexOf(a.type.code) - colorOrder.indexOf(b.type.code);
  });

    //Determine Data Color 
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
    
    
    
   // click functions
    const handleClick = ({ lat, lng }: { lat: string; lng: string },) => {
        dispatchMark({ lat: lat, lng: lng });
    }
   
   

    const dispatchMark = ({ lat, lng }: { lat: string; lng: string }) => {
        dispatch(setMark({ lat: lat, lng: lng }));
    }

   

    return(
     <div>
       {
        sortedReports?.map((emergency: ReportProps )=>{
            return(
                <div key={emergency.id} 
                className={`${determineColorClass(emergency.type.code)}  rounded-lg  border-2 p-2 m-2 cursor-pointer`}
                onDoubleClick={()=>(handleClick({lat: emergency.location.lat, lng: emergency.location.long}))}
                >   
                 <Accordion emergency={emergency} />
                </div>
            )
        })
       }
     </div>
    )
}
    export default EmergencyCard;

    