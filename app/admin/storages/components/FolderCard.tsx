import React from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { LuFilePen, LuFileCog, LuFolderMinus, LuFolderPen } from 'react-icons/lu';
import { EllipsisVerticalIcon, InfoIcon } from 'lucide-react';

const FolderCard = () => {
    return (
        <div className="flex items-center justify-start bg-white shadow-sm rounded overflow-hidden">
            <Checkbox className=" bg-white m-2" />
            <div className="p-2 flex justify-between items-center w-full">
                <p className="block text-sm font-semibold">Folder Name</p>
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
                            <LuFolderPen />
                            Rename
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LuFolderMinus />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default FolderCard;
