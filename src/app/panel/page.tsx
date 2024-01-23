"use client";

import SidebarNavigation from "@/components/navBar";
import { useLoadScript } from "@react-google-maps/api";
import MapView from "@/components/panelView/MapView";
import EmergenciesContainer from "@/components/panelView/EmergenciesContainer";
import AgentContainer from "@/components/panelView/agentesContainer";

const PanelPage: React.FC = () => {

    const APIKEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY 
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: APIKEY!,
    }
   )
    if(!isLoaded) return <div>Loading...</div>

    return (

        <div>
        <div className="flex">
            <div className="absolute z-10">
                <SidebarNavigation />
            </div>
            <div className="z-0 relative">
                <MapView />
            </div>
            <div className="z-0 relative">
            <EmergenciesContainer />
            </div>
        </div>
        <div className="z-0 relative">
            <AgentContainer />
        </div>
    </div>
        
    );
    }

export default PanelPage;