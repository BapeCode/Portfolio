import DesktopEducation from '../educationUtils/DesktopEducation'
import { useIsMobile } from '@/hooks/use-mobile'
import MobileEducations from '../educationUtils/MobileEducations'

export default function EducationPage() {

    const education = [
        {label: "Guardia Cybersecurity School, Lyon", date: '2024-2027', description: 'I am currently studying at Guardia School Cybersecurity Lyon in the field of cybersecurity', skills: ["Cybersecurity", "Network", "Programming", "English"]},
        {label: "Jeheanne de France, Lyon", date: '2021-2024', description: 'I obtained my bachaloreat STHR (Science and Technology of Hotel and Restaurant) in 2024.', skills: ["Service and reception", "Cooking", "Management", "Analysis of the market and customer needs"]},
        {label: "Notre dame de Bellegarde, Lyon", date: '2008-2021', description: 'I obtained my brevet des collèges in 2021', skills: ["Mathematic", "French", "Italian"]},
    ]

    const experiences = [
        {label: "Freelance - Development", date: '2021-Now', description: 'I am currently working as a freelance web developer.', skills: ["React", "Next.js", "TailwindCSS", "Node.js", "Lua", "Python"]},
        {label: "Commercial Selling - Boulangery", date: "Summer 2023", description: 'I worked as a commercial seller in a bakery during the summer of 2023.', skills: ["Customer service", "Sales", "Management", "Method of commercialization"]},
        {label: "Waiter - Restaurant", date: "Winter 2022", description: "I worked at Intercontinental Lyon Hotel Dieu as a waiter during the winter of 2022.", skills: ["Service", "Reception", "Management", "Customer service"]},
        {label: "Waiter - Restaurant", date: "Summer 2022", description: "I worked at Crown Plaza Lyon Cité Internation as a waiter during the winter of 2022.", skills: ["Service", "Reception", "Management", "Customer service"]},
    ]

    return (
        <div className="grid lg:grid-cols-2 justify-center w-full h-full animate-pageSpawn overflow-auto overflow-x-hidden p-5 gap-4 sm:p-10">

            {useIsMobile() ? (
                <>
                    <MobileEducations title='Education' data={education}/>
                    <MobileEducations title='Experiences' data={experiences}/>
                </>
            ) : (
                <>
                    <DesktopEducation title='Education' data={education}/>
                    <DesktopEducation title='Experiences' data={experiences}/>
                </>
            )}

        </div>
    )
}
