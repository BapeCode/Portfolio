import React from 'react'
import { Linkedin, Github, Instagram,  } from 'lucide-react'
import Image from 'next/image'


export default function AboutPage() {

    const SocialsNetwork = [
        {icon: <Linkedin color="#FFFFFF" size="27px" strokeWidth="1.5px" />, name: "linkedin", label: "Linkedin"},
        {icon: <Github color="#FFFFFF" size="27px" strokeWidth="1.5px"/>, name: "github", label: "Github"},
        {icon: <Instagram color="#FFFFFF" size="27px" strokeWidth="1.5px"/>, name: "instagram", label: "Instagram"},
    ]

    return (
        <div className='grid lg:grid-cols-2 w-full h-screen animate-pageSpawn overflow-auto overflow-x-hidden b gap-5'>

            <div className='flex justify-center items-center flex-col gap-1 w-full'>
                <h6 className='text-[rgba(179,179,179,1)] text-md font-normal'>Developper full stack & Studient Cybersecurity</h6>
                <h2 className='text-white text-[30px] sm:text-[40px] lg:text-[50px] font-bold'>Hello I'm Mathieu FOREST</h2>
                <p className='text-left lg:text-justify text-white/85'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis provident fugiat repudiandae ea dolorem veritatis a odit quia illo qui facilis natus non, laborum nostrum commodi expedita aspernatur, unde corporis ducimus at pariatur? Minima nihil nostrum recusandae! Ad at, optio labore aspernatur et architecto debitis, corporis similique doloribus cum maxime.</p>

                <div className='flex items-center justify-center gap-4 flex-row mt-5 overflow-hidden'>
                    {SocialsNetwork.map((item, index) => {
                        return (
                            <div key={index} className='p-3 hover:bg-hovered rounded-full duration-300 transition-all cursor-pointer border border-apple'>
                                <a href=''>{item.icon}</a>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='flex justify-center items-center flex-col'>
                <Image src="/pictures.png" alt='avatar' className='rounded-full border border-blue-400' height={500} width={500} priority={true}/>
                {/* <img className='rounded-full border border-blue-400' src='/pictures.png'/> */}
            </div>

            

        </div>
    )
}
