"use client"

import React, { useState } from "react";
import Link from "next/link";

interface SidebarNavigationProps {}

interface SidebarIconProps {
    title: string;
    icon: string;
    position: { top: string; left: string };
    trianglePosition: { top: string; left: string };
    isHovered: boolean;
    onIconHover: () => void;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({
    title,
    icon,
    position,
    trianglePosition,
    isHovered,
    onIconHover,
}) => (
    <div className="mb-4 2xl:mb-8 relative">
    <Link
        href={`/${title.toLowerCase()}`}
        title={title}
        onMouseEnter={onIconHover}
    >
        <img
        src={`${icon}.svg`}
        alt={title}
        className={`w-6 h-6 2xl:w-8 2xl:h-8 ${isHovered ? "hovered" : ""}`}
        />
    </Link>
    {isHovered && (
        <div
        className="absolute bg-grayblue-700 w-[148px] h-[36px] p-2 rounded-md 2xl:ml-2 2xl:mt-1"
        style={{ top: position.top, left: position.left }}
        >
        <div className="relative flex items-center gap-2">
            <div
            className="w-0 h-0 border-t-[16px] border-t-transparent border-r-[24px] border-r-grayblue-700 border-b-[16px] border-b-transparent absolute"
            style={{ top: trianglePosition.top, left: trianglePosition.left }}
            ></div>
            <p className="text-white font-roboto font-sm font-semibold text-center tracking-wide ml-5">
            {title}
            </p>
        </div>
        </div>
    )}
    </div>
);

const SidebarNavigation: React.FC<SidebarNavigationProps> = () => {
    const [hoveredIcons, setHoveredIcons] = useState<string[]>([]);

    const handleIconHover = (icon: string) => {
    setHoveredIcons([icon]);
    };

    const handleIconLeave = () => {
    setHoveredIcons([]);
    };

    return (
    <div className="relative group">
        <div
        className="fixed top-11 ml-4 2xl:ml-10 bg-white w-[48px] h-[322px] 2xl:w-[58px] 2xl:h-[386px] rounded-md p-2 flex flex-col items-center group-hover:relative"
        onMouseLeave={handleIconLeave}
        >
        <img
            src="Group.svg"
            alt="logo"
            className=" mb-24 top-11 "
            style={{ width: "29.74px", height: "40px" }}
        />

        <SidebarIcon
            title="Panel"
            icon="Inicio"
            position={{ top: "-4px", left: "57px" }}
            trianglePosition={{ top: "-4px", left: "-20px" }}
            isHovered={hoveredIcons.includes("Panel")}
            onIconHover={() => handleIconHover("Panel")}
        />
        <SidebarIcon
            title="Agentes"
            icon="majesticons_user-box-line"
            position={{ top: "-4px", left: "57px" }}
            trianglePosition={{ top: "-4px", left: "-20px" }}
            isHovered={hoveredIcons.includes("Agentes")}
            onIconHover={() => handleIconHover("Agentes")}
        />
        <SidebarIcon
            title="Emergencias"
            icon="Search"
            position={{ top: "-4px", left: "57px" }}
            trianglePosition={{ top: "-4px", left: "-20px" }}
            isHovered={hoveredIcons.includes("Emergencias")}
            onIconHover={() => handleIconHover("Emergencias")}
        />
        <SidebarIcon
            title="Analisis"
            icon="Estadisticas"
            position={{ top: "-4px", left: "57px" }}
            trianglePosition={{ top: "-4px", left: "-20px" }}
            isHovered={hoveredIcons.includes("Analisis")}
            onIconHover={() => handleIconHover("Analisis")}
        />
        </div>
    </div>
    );
};

export default SidebarNavigation;
