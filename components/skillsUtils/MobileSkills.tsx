import React from 'react'
import { Separator } from '../ui/separator'
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { SkillProps } from '@/type/SkillType'

export default function MobileSkills({title, data}: SkillProps) {
    return (
        <div className='flex justify-start items-center flex-col gap-3 h-full w-full'>

            <h1 className="text-white font-semibold text-3xl">{title}</h1>
            <Separator className="w-full"/>

            {data.map((item, index) => (
                <Card key={index} className='flex justify-between items-center flex-col rounded-apple bg-background text-white shadow-md'>
                    <Card className="flex justify-center items-center flex-col bg-background rounded-apple text-white shadow-md p-10 w-full h-full">
                        <CardContent className="flex items-center justify-center">
                            <Image src={item.img} alt={item.name} width={`${100}`} height={100} />
                        </CardContent>
                        <CardDescription className="flex flex-col justify-center items-center gap-2 w-full">
                            <p className="text-white font-semibold text-lg text-center">{item.name}</p>
                            <Progress className="w-full" value={item.value} />
                        </CardDescription>
                    </Card>
            </Card>
            ))}
        </div>
    )
}