import React from 'react'
import { Separator } from './ui/separator'
import AboutPage from './pages/about'
import EducationPage from './pages/education'
import SkillPage from './pages/skill'
import Header from './Header'


function Container({tabActive, tabLabel}: {tabActive: string, tabLabel: string}) {
    return (
        <div className="flex flex-col items-center justify-start h-4/6 w-5/6 rounded-apple bg-background backdrop-blur-apple shadow-gradient p-6 select-none animate-containerSpawn relative z-10 overflow-y-hidden" 
        style={{boxShadow: "0px 8.34px 6.25px 0px rgba(0, 0, 0, 0.1), inset 0px 1.04px 1.04px 0px rgba(255, 255, 255, 0.25), inset 0px -1.04px 1.04px 0px rgba(255, 255, 255, 0.1)"}}>
            
            <Header tabLabel={tabLabel}/>

            <Separator className='my-4 bg-active'/>

            {tabActive === 'about' && (
                <AboutPage/>
            ) || tabActive === 'school' && (
                <EducationPage/>
            ) || tabActive === 'skills' && (
                <SkillPage/>
            )}

        </div>
    )
}

export default Container