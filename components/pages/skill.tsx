import DesktopSkills from "../skillsUtils/DesktopSkills"
import { useIsMobile } from "@/hooks/use-mobile"
import MobileSkills from "../skillsUtils/MobileSkills"

export default function SkillPage() {

    const technology = [
        {name: 'React', img: '/icons/react.svg', value: 80},
        {name: 'CSS', img: '/icons/css.svg', value: 90},
        {name: 'HTML', img: '/icons/html.svg', value: 90},
        {name: 'JavaScript', img: '/icons/javascript.svg', value: 60},
        {name: 'NextJS', img: '/icons/nextjs.svg', value: 50},
        {name: 'Prisma', img: '/icons/prisma.svg', value: 10},
        {name: 'TailWind CSS', img: '/icons/tailwind.svg', value: 60},
        {name: 'Vite', img: '/icons/vite.svg', value: 65},
    ]

    const logiciel = [
        {name: 'Figma', img: '/icons/figma.svg', value: 50},
        {name: 'Git', img: '/icons/git.svg', value: 40},
        {name: 'GitHub', img: '/icons/github.svg', value: 70},
        {name: 'VSCode', img: '/icons/vscode.svg', value: 90},
    ]

    return (
        <div className='grid lg:grid-cols-2 justify-center w-full h-screen animate-pageSpawn overflow-auto overflow-x-hidden p-10 gap-2'>

            {useIsMobile() ? (
                <>
                    <MobileSkills title="Technology" data={technology} />
                    <MobileSkills title="Tools" data={logiciel} />
                </>
            ): (
                <>
                    <DesktopSkills title="Technology" data={technology} />
                    <DesktopSkills title="Tools" data={logiciel} />
                </>
            )}

        </div>
    )
}
