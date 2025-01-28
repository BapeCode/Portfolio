import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button'

export default function Header({tabLabel}: {tabLabel: string}) {

    const handleDownloadCV = () => {
        window.open('/FOREST_Mathieu_CV.pdf', '_blank')
    }

    return (
        <header className="flex items-center justify-between w-full">

                <div className='flex items-start justify-center flex-col'>
                    <h6 className='text-[rgba(179,179,179,1)] text-md font-normal'>Welcome to</h6>
                    <h2 className='text-white font-bold text-3xl'>Mathieu FOREST</h2>
                </div>

                <h1 className='text-white font-normal text-2xl uppercase max-lg:hidden'>{tabLabel}</h1>
 
                <div className='flex items-center justify-center gap-4 flex-col sm:flex-col-reverse'>
                    <Button onClick={handleDownloadCV} variant="apple" size="apple" className='hidden sm:flex'>Download CV</Button>
                    <Avatar>
                        <AvatarImage src="/avatar.png" className='hover:scale-105 duration-300 transition-all'/>
                        <AvatarFallback>Mathieu FOREST</AvatarFallback>
                    </Avatar>
                </div>
        </header>
    )
}
