'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import {
    LuUpload,
    LuSettings2,
    LuFileSearch,
    LuListFilter,
    LuDownload,
    LuTrash2,
    LuCopy,
    LuFileInput,
} from 'react-icons/lu';
import { BsFiletypePdf, BsFiletypeXlsx, BsFiletypeDocx, BsFiletypePptx } from 'react-icons/bs';
import { XIcon } from 'lucide-react';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';

import FolderCard from '../components/FolderCard';
import FileCard from '../components/FileCard';
import files from '@/mockups/FileList.mockup';

const page = () => {
    const { isMobile } = useSidebar();
    return (
        <main className="flex-1 px-4 py-2 space-y-4">
            <header className="space-y-2 mb-4">
                <section className="flex items-center gap-1">
                    <div className="mr-auto ">
                        {isMobile && <SidebarTrigger />}
                        <span className="text-2xl font-semibold">Folder Name</span>
                    </div>
                    <Button variant={'ghost'} className="[&_svg]:size-5 text-blue-500 hover:text-blue-500">
                        <LuListFilter />
                    </Button>
                    <Button variant={'ghost'} className="[&_svg]:size-5 text-blue-500 hover:text-blue-500">
                        <LuFileSearch />
                    </Button>
                    <Button variant={'ghost'} className="[&_svg]:size-5 text-blue-500 hover:text-blue-500">
                        <LuSettings2 />
                    </Button>
                    <Button className="bg-blue-500 text-white hover:bg-blue-300">
                        <LuUpload />
                        Upload
                    </Button>
                </section>
                <section className="flex items-center justify-start gap-2 bg-accent rounded-md p-1">
                    <Button variant={'ghost'} className="flex items-center p-0 size-8">
                        <XIcon className="text-blue-500" />
                    </Button>
                    <p className="text-sm">1 selected</p>
                    <Button variant={'ghost'} className="flex items-center">
                        <LuDownload className="text-blue-500" />
                        Download
                    </Button>
                    <Button variant={'ghost'} className="flex items-center">
                        <LuTrash2 className="text-blue-500" />
                        Delete
                    </Button>
                    <Button variant={'ghost'} className="flex items-center">
                        <LuCopy className="text-blue-500" />
                        Copy
                    </Button>
                    <Button variant={'ghost'} className="flex items-center">
                        <LuFileInput className="text-blue-500" />
                        Move
                    </Button>
                </section>
            </header>
            {/* <div className="grid grid-cols-4 gap-4">
                {Array.from({ length: 9 }).map((_, index) => (
                    <FolderCard key={index} />
                ))}
            </div> */}
            <div className="grid grid-cols-4 gap-4">
                {files.map((item, index) => (
                    <FileCard file={item} key={index} />
                ))}
            </div>
            <div className="flex justify-between items-center mt-4">
                <button className="text-gray-600">
                    <i className="fas fa-angle-double-left"></i>
                </button>
                <span className="text-gray-600">1 of 1</span>
                <button className="text-gray-600">
                    <i className="fas fa-angle-double-right"></i>
                </button>
            </div>
        </main>
    );
};

export default page;
