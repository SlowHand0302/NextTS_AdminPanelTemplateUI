import {
    Sidebar,
    SidebarContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarGroup,
    SidebarGroupContent,
    SidebarFooter,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
    LuFolderTree,
    LuFolderPlus,
    LuFolder,
    LuFolderPen,
    LuHistory,
    LuSettings,
    LuNewspaper,
    LuFolderMinus,
} from 'react-icons/lu';
import { VideoIcon, ImageIcon, AudioLines, ChevronRight, EllipsisVerticalIcon } from 'lucide-react';
import Link from 'next/link';
import { MyFolder } from '@/types/Folder.entity';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const storagesItemsMockup = [
    {
        title: 'Images',
        icon: ImageIcon,
    },
    {
        title: 'Videos',
        icon: VideoIcon,
    },
    {
        title: 'Audios',
        icon: AudioLines,
    },
    {
        title: 'Documents',
        icon: LuNewspaper,
    },
];

const folderItemsMockup = [
    {
        name: 'Folder Name',
        subfolders: [],
    },
    {
        name: 'Folder Name',
        subfolders: [
            {
                name: 'Folder Name',
                subfolders: [],
            },
        ],
    },
    {
        name: 'Folder Name',
        subfolders: [
            {
                name: 'Folder Name',
                subfolders: [
                    {
                        name: 'Folder Name',
                        subfolders: [
                            {
                                name: 'Folder Name',
                                subfolders: [
                                    {
                                        name: 'Folder Name',
                                        subfolders: [
                                            {
                                                name: 'Folder Name',
                                                subfolders: [
                                                    {
                                                        name: 'Folder Name',
                                                        subfolders: [],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Folder Name',
        subfolders: [
            {
                name: 'Folder Name',
                subfolders: [
                    {
                        name: 'Folder Name',
                        subfolders: [
                            {
                                name: 'Folder Name',
                                subfolders: [
                                    {
                                        name: 'Folder Name',
                                        subfolders: [
                                            {
                                                name: 'Folder Name',
                                                subfolders: [
                                                    {
                                                        name: 'Folder Name',
                                                        subfolders: [],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

export default function StoragesSubSidebar() {
    return (
        <Sidebar className='absolute w-full' collapsible="icon">
        {/* <Sidebar className="max-w-full max-h-full md:w-full sm:block w-(--sidebar-width-icon)" collapsible="none"> */}
            <SidebarHeader>
                <SidebarMenu>
                    {storagesItemsMockup.map((item, index) => {
                        return (
                            <SidebarMenuItem key={index}>
                                <SidebarMenuButton asChild>
                                    <div className="mr-4 flex items-center space-x-2 text-2xl lg:mr-6">
                                        <item.icon size={24} />
                                        <span className="font-bold inline-block">{item.title}</span>
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="pt-0 max-h-fit">
                <SidebarGroup className="pt-0">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={'#'}>
                                        <LuFolderTree />
                                        <span>Folders</span>
                                        <LuFolderPlus className="ml-auto" />
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuSub className=" overflow-y-auto max-h-[50svh] mr-0 pr-0">
                                    <SidebarMenuSubItem>
                                        {folderItemsMockup.map((item, index) => {
                                            return <FolderTreeNode key={index} node={item} />;
                                        })}
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={'#'}>
                                <LuHistory />
                                <span>Recently</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={'#'}>
                                <LuSettings />
                                <span>Settings</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}

interface FolderTreeNode {
    node: MyFolder;
}

function FolderTreeNode({ node }: FolderTreeNode) {
    return (
        <Collapsible>
            <CollapsibleTrigger asChild>
                <SidebarMenuSubButton className="cursor-pointer group/menu-sub-button flex items-center gap-0 [&[data-state=open]>svg]:rotate-90">
                    <ChevronRight className="transition-transform duration-200" />
                    <LuFolder className="!transform-none" />
                    <span className="ml-2 line-clamp-1">{node.name}</span>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="ml-auto" asChild>
                            <Button
                                variant={'ghost'}
                                className="p-0 focus-visible:ring-0 opacity-0 group-focus-within/menu-sub-button:opacity-100 group-target/menu-sub-button:opacity-100 data-[state=open]:opacity-100 group-hover/menu-sub-button:opacity-100"
                            >
                                <EllipsisVerticalIcon size={15} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="start"
                            sideOffset={0}
                            side="right"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <DropdownMenuItem>
                                <LuFolderPlus />
                                Add SubFolder
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <LuFolderPen />
                                Rename
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <LuFolderMinus />
                                Remove
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuSubButton>
            </CollapsibleTrigger>
            {node.subfolders && node.subfolders.length > 0 && (
                <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                    <SidebarMenuSub className="pr-0 mr-0">
                        {node.subfolders.map((item, index) => {
                            return <FolderTreeNode key={index} node={item} />;
                        })}
                    </SidebarMenuSub>
                </CollapsibleContent>
            )}
        </Collapsible>
    );
}
