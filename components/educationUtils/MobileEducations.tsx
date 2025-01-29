import React from 'react'
import { Separator } from '../ui/separator'
import { EducationProps } from '@/type/EducationType'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function MobileEducations({title, data}: EducationProps) {
    return (
        <div className='flex justify-start items-center flex-col gap-3 h-full w-full'>

            <h1 className="text-white font-semibold text-3xl">{title}</h1>
            <Separator className="w-full"/>

            {data.map((item, index) => (
                <Card key={index} className='flex justify-between items-center flex-col rounded-apple bg-background text-white shadow-md'>
                    <CardHeader className='w-full'>
                        <CardTitle className='text-blue-100 font-bold'>{item.date}</CardTitle>
                        <CardDescription className='text-white text-md'>{item.label}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className='text-white font-semibold text-sm'>{item.description}</p>
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
            ))}
        </div>
    )
}
{/* <Card className='flex justify-between items-center flex-col bg-background rounded-apple text-white shadow-md'>
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
                                    </Card> */}