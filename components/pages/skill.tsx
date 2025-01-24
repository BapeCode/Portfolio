import { Separator } from "../ui/separator"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from "@/components/ui/progress"
import { log } from "console"


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
        <div className='grid lg:grid-cols-2 justify-center w-full  h-screen animate-pageSpawn overflow-auto overflow-x-hidden p-10 gap-2'>

            <div className="flex justify-center items-center flex-col gap-3">
                <h1 className="text-white font-semibold text-3xl">Technology</h1>
                <Separator className="w-2/3"/>

                <Carousel className="w-1/2 sm:w-2/3 lg:w-full max-w-xs">
                    <CarouselContent>
                        {technology.map((item, index) => (
                            <CarouselItem key={index} className="h-full w-full ">
                                <Card className="flex justify-between items-center flex-col bg-background rounded-apple text-white shadow-md p-2">
                                    <CardContent className="flex items-center justify-center">
                                        <img src={`${item.img}`} alt={item.name} className="w-1/2"/>
                                    </CardContent>
                                    <CardDescription className="flex flex-col justify-center items-center gap-2 w-full">
                                        <p className="text-white font-semibold text-lg text-center">{item.name}</p>
                                        <Progress className="w-full" value={item.value} />
                                    </CardDescription>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                        <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>

            <div className="flex justify-center items-center flex-col gap-3">
                <h1 className="text-white font-semibold text-3xl">Tools</h1>
                <Separator className="w-2/3"/>

                <Carousel className="w-1/2 sm:w-2/3 lg:w-full max-w-xs">
                    <CarouselContent>
                        {logiciel.map((item, index) => (
                            <CarouselItem key={index} className="h-full w-full ">
                                <Card className="flex justify-between items-center flex-col bg-background rounded-apple text-white shadow-md p-2">
                                    <CardContent className="flex items-center justify-center">
                                        <img src={`${item.img}`} alt={item.name} className="w-1/2"/>
                                    </CardContent>
                                    <CardDescription className="flex flex-col justify-center items-center gap-2 w-full">
                                        <p className="text-white font-semibold text-lg text-center">{item.name}</p>
                                        <Progress className="w-full" value={item.value} />
                                    </CardDescription>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                        <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>

        </div>
    )
}
