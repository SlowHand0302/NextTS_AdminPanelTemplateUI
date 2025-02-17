import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';
import { EllipsisVerticalIcon, InfoIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LuFilePen, LuFileCog } from 'react-icons/lu';
import { MyFile } from '@/types/File.entity';

interface FileCardProps {
    file: MyFile;
}

const FileCard = ({ file }: FileCardProps) => {
    return (
        <div className="bg-white shadow-sm rounded overflow-hidden relative">
            <Checkbox className="absolute bg-white m-2" />
            <img src={file.src} alt={file.alt} className="w-full h-32 object-cover aspect-auto" />
            <div className="p-2 flex justify-between items-center">
                <div>
                    <span className="block text-xs text-gray-500">{file.type}</span>
                    <span className="block text-sm font-semibold">{file.label}</span>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'ghost'} className="p-0">
                            <EllipsisVerticalIcon size={15} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem>
                            <InfoIcon />
                            View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LuFilePen />
                            Rename
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LuFileCog />
                            Edit
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default FileCard;
