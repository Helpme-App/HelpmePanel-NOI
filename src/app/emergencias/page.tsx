import Reportes from "@/components/emergencias";
import SidebarNavigation from "@/components/navBar";    

const Emergencias: React.FC = () => {

    return (
        <div className="flex">
            <div className="absolute z-10">
                <SidebarNavigation />
            </div>
            <div className="z-0 relative">
                <Reportes/>
            </div>
        </div>
    );
    }


export default Emergencias;