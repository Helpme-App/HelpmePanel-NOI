import React from "react";
import SidebarNavigation from "@/components/navBar";
import Agentes from "@/components/agentes";
    

const AgentesPage: React.FC = () => {

    return (
        <div className="flex">
            <div className="absolute z-10">
                <SidebarNavigation />
            </div>
            <div className="z-0 relative">
                <Agentes agentes={[]}/>
            </div>
        </div>
    );
    }


export default AgentesPage;