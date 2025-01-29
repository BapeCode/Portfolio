import React from 'react'
import { Linkedin, Github, Instagram,  } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'


export default function AboutPage() {

    const SocialsNetwork = [
        {icon: <Linkedin color="#FFFFFF" size="27px" strokeWidth="1.5px" />, name: "linkedin", label: "Linkedin", link: "https://www.linkedin.com/in/mathieu-forest/"},
        {icon: <Github color="#FFFFFF" size="27px" strokeWidth="1.5px"/>, name: "github", label: "Github", link: 'https://github.com/BapeCode'},
        {icon: <Instagram color="#FFFFFF" size="27px" strokeWidth="1.5px"/>, name: "instagram", label: "Instagram", link: 'https://www.instagram.com/mathieu___frt'},
    ]

    const handleDownloadCV = () => {
        window.open('/FOREST_Mathieu_CV.pdf', '_blank')
    }

    return (
        <div className='grid lg:grid-cols-2 w-full h-screen animate-pageSpawn overflow-auto overflow-x-hidden b gap-5'>

            <div className='flex justify-center items-center flex-col gap-1 w-full'>
                <h6 className='text-[rgba(179,179,179,1)] text-md font-normal'>Developper full stack & Studient Cybersecurity</h6>
                <h2 className='text-white text-[30px] sm:text-[40px] lg:text-[50px] font-bold text-center sm:text-left'>{`Hello I'm Mathieu FOREST`}</h2>
                <p className='text-left lg:text-justify text-white/85'>Bonjour ! Je m'appelle Mathieu FOREST, j'ai 19 ans et je suis passionné par l'informatique, le développement web et logiciel. Actuellement étudiant à la Guardia Cybersecurity School de Lyon, je me spécialise dans la cybersécurité tout en cultivant mon intérêt pour les technologies émergentes. Curieux et motivé, je suis toujours à la recherche de nouveaux défis pour approfondir mes compétences et contribuer à des projets innovants.</p>

                <div className='flex items-center justify-center gap-4 flex-col mt-5 overflow-hidden'>
                    <div className="flex justify-center items-center gap-2">
                        {SocialsNetwork.map((item, index) => {
                            return (
                                <div key={index} className='p-3 hover:bg-hovered rounded-full duration-300 transition-all cursor-pointer border border-apple' >
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" >{item.icon}</a>
                                </div>
                            )
                        })}
                    </div>
                    <Button onClick={handleDownloadCV} variant="apple" size="apple" className='flex sm:hidden'>Download CV</Button>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col'>
                <Image src="/pictures.png" alt='avatar' className='rounded-full border border-blue-400 sm:w-[10wh]' height={400} width={400} priority={true}/>
            </div>

            

        </div>
    )
}
