import React from 'react'
import TabBarProps from '@/type/TabBar'
import { PanelRightClose,  PanelRightOpen } from 'lucide-react'
import { Separator } from './ui/separator'

export default function TabBar({tabOpen, setTabOpen, tabActive, setTabActive, sideBar}: TabBarProps) {
    return (
        <div className={`relative z-10 flex items-center justify-center lg:flex-col sm:flex-row gap-[10.42px] ${tabOpen ? 'lg:w-[200px] sm:h-[200px] h-[200px] origin-left rounded-tab-open' : 'lg:w-[70px] sm:h-[70px] h-[70px] origin-left rounded-tab-close'} w-5/6 lg:h-auto relative duration-300 bg-background backdrop-blur-apple py-[10.42px] px-[10.42px] select-none animate-tabSpawn`} 
        style={{boxShadow: "0px 8.34px 6.25px 0px rgba(0, 0, 0, 0.1), inset 0px 1.04px 1.04px 0px rgba(255, 255, 255, 0.25), inset 0px -1.04px 1.04px 0px rgba(255, 255, 255, 0.1)"}}>
            
            {sideBar.map((item, index) => (
                <div key={index} className={`flex ${tabOpen ? 'rounded-tab-open' : 'rounded-full'} items-center justify-center sm:justify-start gap-3 p-3 hover:bg-hovered w-full ${tabActive === item.name && 'bg-active'} duration-300 transition-all cursor-pointer`} onClick={() => setTabActive(item.name)}>

                    <span className="origin-center duration-200 ">
                        {item.icon}
                    </span>
                    <span className={`overflow-hidden text-sm font-medium text-white hidden lg:block sm:block`}>{item.label}</span>
                    
                </div>
                
            ))}

            <Separator className='my-4 bg-active sm:hidden lg:block hidden'/>

            <div className={`${tabOpen ? 'rounded-tab-open': 'rounded-full'} sm:hidden lg:flex hidden items-center justify-center gap-3 p-3 hover:bg-hover w-full duration-300 transition-all cursor-pointer hover:bg-hovered`} onClick={() => setTabOpen(!tabOpen)}>
                    {tabOpen ? (
                        <PanelRightClose color="#FFFFFF" size="27px" strokeWidth="1.5px"/>
                        ) : (
                        <PanelRightOpen color="#FFFFFF" size="27px" strokeWidth="1.5px"/>
                    )}
            </div>

        </div>
    )
}
