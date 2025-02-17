'use client';
import React from 'react';
import { DataTableDemo } from '../components/DataTableDemo';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import {
    LuArrowUp,
    LuArrowRight,
    LuArrowDown,
    LuEqualApproximately,
    LuPlus,
    LuMinus,
    LuDollarSign,
} from 'react-icons/lu';
import { TbMoodPin, TbUsers, TbCreditCardFilled } from 'react-icons/tb';
import { ChartDemo } from './ChartDemo';

const page = () => {
    return (
        <main className="p-3 space-y-2">
            <section className="flex gap-2 w-full">
                <Card className="grow relative">
                    <CardHeader className="pb-0">
                        <CardDescription>Status Name</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl flex items-center gap-3">
                            <h1 className="font-bold">000000</h1>
                            <div className="text-[14px] h-5 w-fit px-1 py-1.5 text-green-500 font-semibold flex justify-center items-center bg-green-100 rounded-md">
                                <LuArrowUp />
                                <p>0.0%</p>
                            </div>
                        </div>
                        <CardDescription className="flex items-center gap-1">
                            <div className="text-[14px] h-5 w-fit px-1 py-1.5 text-green-500 font-semibold flex justify-center items-center bg-green-100 rounded-md">
                                <LuPlus />
                                <p>0000</p>
                            </div>
                            than past week
                        </CardDescription>
                    </CardContent>
                    <TbMoodPin size={32} className="absolute top-4 right-5" />
                </Card>
                <Card className="grow relative">
                    <CardHeader className="pb-0">
                        <CardDescription>Status Name</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl flex items-center gap-3">
                            <h1 className="font-bold">000000</h1>
                            <div className="text-[14px] h-5 w-fit px-1 py-1.5 text-red-500 font-semibold flex justify-center items-center bg-red-100 rounded-md">
                                <LuArrowDown />
                                <p>0.0%</p>
                            </div>
                        </div>
                        <CardDescription className="flex items-center gap-1">
                            <div className="text-[14px] h-5 w-fit px-1 py-1.5 text-red-500 font-semibold flex justify-center items-center bg-red-100 rounded-md">
                                <LuMinus /> <p>0000</p>
                            </div>
                            than past week
                        </CardDescription>
                    </CardContent>
                    <TbUsers size={32} className="absolute top-4 right-5" />
                </Card>
                <Card className="grow relative">
                    <CardHeader className="pb-0">
                        <CardDescription>Status Name</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl flex items-center gap-3">
                            <h1 className="font-bold">000000</h1>
                            <div className="text-[14px] h-5 w-fit px-1 py-1.5 text-yellow-500 font-semibold flex justify-center items-center bg-yellow-100 rounded-md">
                                <LuArrowRight />
                                <p>0.0%</p>
                            </div>
                        </div>
                        <CardDescription className="flex items-center gap-1">
                            <div className="text-[14px] h-5 w-fit px-1 py-1.5 text-yellow-500 font-semibold flex justify-center items-center bg-yellow-100 rounded-md">
                                <LuEqualApproximately />
                                <p>0000</p>
                            </div>
                            than past week
                        </CardDescription>
                    </CardContent>
                    <TbCreditCardFilled size={32} className="absolute top-4 right-5" />
                </Card>
                <Card className="grow relative">
                    <CardHeader className="pb-0">
                        <CardDescription>Status Name</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl flex items-center gap-3">
                            <h1 className="font-bold">000000</h1>
                            <div className="text-[14px] h-5 w-fit px-1 py-1.5 text-green-500 font-semibold flex justify-center items-center bg-green-100 rounded-md">
                                <LuArrowUp />
                                <p>0.0%</p>
                            </div>
                        </div>
                        <CardDescription className="flex items-center gap-1">
                            <div className="text-[14px] h-5 w-fit px-1 py-1.5 text-green-500 font-semibold flex justify-center items-center bg-green-100 rounded-md">
                                <LuPlus />
                                <p>0000</p>
                            </div>
                            than past week
                        </CardDescription>
                    </CardContent>
                    <LuDollarSign size={32} className="absolute top-4 right-5" />
                </Card>
            </section>
            <section className="flex gap-2">
                <ChartDemo />
                <DataTableDemo />
            </section>
        </main>
    );
};

export default page;
