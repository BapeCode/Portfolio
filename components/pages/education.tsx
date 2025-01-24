import { Badge } from '../ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Separator } from "../ui/separator"
import { Button } from '../ui/button'


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
        <div className="grid lg:grid-cols-2 justify-center w-full h-screen animate-pageSpawn overflow-auto overflow-x-hidden p-10 gap-2">

            <div className="flex justify-center items-center flex-col gap-3">
                <h1 className="text-white font-semibold text-3xl">Education</h1>
                <Separator className="w-2/3"/>

                <Carousel className="w-1/2 sm:w-2/3 lg:w-full max-w-xs">
                    <CarouselContent>
                        {education.map((item, index) => (
                            <CarouselItem key={index} className='h-full w-full'>
                                <div className="p-1 flex justify-between items-center h-full">
                                    <Card className='flex justify-between items-center flex-col bg-background rounded-apple text-white shadow-md'>
                                        <CardHeader className='w-full'>
                                            <CardTitle className="text-blue-100 font-bold">{item.date}</CardTitle>
                                            <CardDescription className="text-white text-md">{item.label}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-white font-semibold text-sm">{item.description}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <div className="flex justify-start items-center flex-wrap gap-1 w-full">
                                                {item.skills && item.skills.map((skill, index) => {
                                                    return (
                                                        <Badge key={index} variant="outline">{skill}</Badge>
                                                    )
                                                })}
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='cursor-pointer bg-white' />
                    <CarouselNext className='cursor-pointer bg-white' />
                </Carousel>
            </div>

            <div className="flex justify-center items-center flex-col gap-3">
                <h1 className="text-white font-semibold text-3xl">Experiences</h1>
                <Separator className="w-2/3"/>

                <Carousel className="w-1/2 sm:w-2/3 lg:w-full max-w-xs">
                    <CarouselContent>
                        {experiences.map((item, index) => (
                            <CarouselItem key={index} className='h-full w-full'>
                                <div className="p-1 flex justify-center items-center h-full">
                                    <Card className='flex justify-between items-center flex-col bg-background rounded-apple text-white shadow-md'>
                                        <CardHeader className='w-full'>
                                            <CardTitle className="text-blue-100 font-bold">{item.date}</CardTitle>
                                            <CardDescription className="text-white text-md">{item.label}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-white font-semibold text-sm">{item.description}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <div className="flex justify-start items-center flex-wrap gap-1 w-full">
                                                {item.skills && item.skills.map((skill, index) => {
                                                    return (
                                                        <Badge key={index} variant="outline">{skill}</Badge>
                                                    )
                                                })}
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='cursor-pointer bg-white' />
                    <CarouselNext className='cursor-pointer bg-white' />
                </Carousel>
            </div>

        </div>
    )
}
