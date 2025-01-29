import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Separator } from "../ui/separator"
import { Badge } from '../ui/badge'
import { EducationProps } from '@/type/EducationType'

export default function DesktopEducation({title, data}: EducationProps) {
    return (
        <div className="flex justify-start items-center flex-col gap-3 h-full w-full">
                <h1 className="text-white font-semibold text-3xl">{title}</h1>
                <Separator className="w-full"/>

                <Carousel className="w-2/3 sm:w-2/3 lg:w-full max-w-xs h-full">
                    <CarouselContent>
                        {data.map((item, index) => (
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
                    <CarouselPrevious className='cursor-pointer bg-white hidden sm:flex' />
                    <CarouselNext className='cursor-pointer bg-white hidden sm:flex' />
            </Carousel>
        </div>
    )
}