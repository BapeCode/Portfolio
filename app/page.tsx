"use client"

import Container from "@/components/Container";
import TabBar from "@/components/TabBar"
import { House, Info, GraduationCap, Hammer, Contact, PanelRightClose,  PanelRightOpen} from "lucide-react";
import { useState } from "react";

export default function Home() {
    const [tabActive, setTabActive] = useState("about");
    const [tabOpen, setTabOpen] = useState(false);

    const sideBar = [
        {icon: <Info color="#FFFFFF" size="27px" strokeWidth="1.5px"/>, name: "about", label: "Informations"},
        {icon: <GraduationCap color="#FFFFFF" size="27px" strokeWidth="1.5px"/>, name: "school", label: "Educations"},
        {icon: <Hammer color="#FFFFFF" size="27px" strokeWidth="1.5px"/>, name: "skills", label: "Skills"},
        {icon: <Contact color="#FFFFFF" size="27px" strokeWidth="1.5px"/>, name: "contact", label: "Contact"},
    ]


    return (

        <>
            <div className="absolute inset-0 z-[-10] brightness-[0.64]">
                <div
                    style={{ backgroundImage: "url('/background.png')" }}
                    className="h-screen w-full bg-center bg-no-repeat bg-cover"
                />
            </div>

            <div className="relative z-10 flex justify-center items-center flex-col sm:flex-col lg:flex-row gap-6 h-screen w-full duration-300">
                
                <TabBar tabOpen={tabOpen} tabActive={tabActive} setTabActive={setTabActive} setTabOpen={setTabOpen} sideBar={sideBar}/>
                
        
                <Container tabActive={tabActive} tabLabel={sideBar.find(item => item.name === tabActive)?.label || ''}/>
            </div>
        </>
    );
}
