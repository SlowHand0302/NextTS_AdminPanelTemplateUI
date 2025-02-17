import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { FaGoogleDrive, FaAws } from 'react-icons/fa6';
import { TbBrandOnedrive, TbBrandFirebase } from 'react-icons/tb';
import { BsFiletypePdf, BsFiletypeXlsx, BsFiletypeDocx, BsFiletypePptx } from 'react-icons/bs';
import { Component } from './components/BieChartDemo';

const page = () => {
    return (
        <div className="flex p-6 h-screen gap-6">
            <main className="flex-1">
                <section className="grid grid-cols-4 gap-6 mb-6">
                    <Card className="grow relative">
                        <CardHeader className="p-2">
                            <FaGoogleDrive size={50} />
                        </CardHeader>
                        <CardFooter className="flex-col items-start gap-2 p-2">
                            <CardTitle className="font-bold">Google Drive</CardTitle>
                            <Progress value={80} className="" />
                            <CardDescription className="flex w-full justify-between gap-1">
                                <p>72GB</p>
                                <p>100GB</p>
                            </CardDescription>
                        </CardFooter>
                    </Card>
                    <Card className="grow relative">
                        <CardHeader className="p-2">
                            <FaAws size={50} />
                        </CardHeader>
                        <CardFooter className="flex-col items-start gap-2 p-2">
                            <CardTitle className="font-bold">AWS S3</CardTitle>
                            <Progress value={80} className="" />
                            <CardDescription className="flex w-full justify-between gap-1">
                                <p>72GB</p>
                                <p>100GB</p>
                            </CardDescription>
                        </CardFooter>
                    </Card>
                    <Card className="grow relative">
                        <CardHeader className="p-2">
                            <TbBrandOnedrive size={50} />
                        </CardHeader>
                        <CardFooter className="flex-col items-start gap-2 p-2">
                            <CardTitle className="font-bold">One Drive</CardTitle>
                            <Progress value={80} className="" />
                            <CardDescription className="flex w-full justify-between gap-1">
                                <p>72GB</p>
                                <p>100GB</p>
                            </CardDescription>
                        </CardFooter>
                    </Card>
                    <Card className="grow relative">
                        <CardHeader className="p-2">
                            <TbBrandFirebase size={50} />
                        </CardHeader>
                        <CardFooter className="flex-col items-start gap-2 p-2">
                            <CardTitle className="font-bold">Firebase</CardTitle>
                            <Progress value={80} className="" />
                            <CardDescription className="flex w-full justify-between gap-1">
                                <p>72GB</p>
                                <p>100GB</p>
                            </CardDescription>
                        </CardFooter>
                    </Card>
                </section>
                <h1 className="mb-2 font-bold">Quick Access</h1>
                <section className="grid grid-cols-4 gap-6 mb-6">
                    <Card className="grow relative">
                        <CardHeader>
                            <BsFiletypePdf size={50} className="mx-auto" />
                        </CardHeader>
                        <CardFooter>
                            <CardDescription className="text-center w-full">PDF Files</CardDescription>
                        </CardFooter>
                    </Card>
                    <Card className="grow relative">
                        <CardHeader>
                            <BsFiletypePdf size={50} className="mx-auto" />
                        </CardHeader>
                        <CardFooter>
                            <CardDescription className="text-center w-full">PDF Files</CardDescription>
                        </CardFooter>
                    </Card>
                    <Card className="grow relative">
                        <CardHeader>
                            <BsFiletypePdf size={50} className="mx-auto" />
                        </CardHeader>
                        <CardFooter>
                            <CardDescription className="text-center w-full">PDF Files</CardDescription>
                        </CardFooter>
                    </Card>
                    <Card className="grow relative">
                        <CardHeader>
                            <BsFiletypePdf size={50} className="mx-auto" />
                        </CardHeader>
                        <CardFooter>
                            <CardDescription className="text-center w-full">PDF Files</CardDescription>
                        </CardFooter>
                    </Card>
                </section>
            </main>
            <aside className="w-80 ">
                <Component />
            </aside>
        </div>
    );
};

export default page;
