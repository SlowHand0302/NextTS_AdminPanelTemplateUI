import { VideoIcon, ImageIcon, AudioLines, StoreIcon } from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useSidebar } from '@/components/ui/sidebar';
import Logo from '@/components/Logo';
import Account from '@/components/Account';
import { FC, ReactNode } from 'react';
import { ApplicationSidebarItems, StoragesSidebarItems } from '@/mockups/AdminSideBarItems';
import Link from 'next/link';

export type SideBarItem = {
    title: string;
    url: string;
    icon: FC;
};

const mediaQuery = [
    {
        title: 'Image',
        url: 'admin/images',
        icon: ImageIcon,
    },
    {
        title: 'Video',
        url: 'admin/video',
        icon: VideoIcon,
    },
    {
        title: 'Audio',
        url: 'admin/audio',
        icon: AudioLines,
    },
];

function AdminSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a className="mr-4 flex items-center space-x-2 lg:mr-6" href="#">
                                <Logo />
                                <span className="font-bold lg:inline-block">shadcn/ui</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="gap-0">
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {ApplicationSidebarItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup className="pt-0">
                    <SidebarGroupLabel>File Storages</SidebarGroupLabel>
                    <SidebarContent className="gap-0">
                        <SidebarMenu>
                            {StoragesSidebarItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                        <AccordionSidebarMenuItem
                            title="Media Gallery"
                            icon={<StoreIcon className="shrink-0 size-4" />}
                            items={mediaQuery}
                        />
                    </SidebarContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Account />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}

export interface AccordionSidebarMenuItemProps {
    title: string;
    icon?: ReactNode;
    items: SideBarItem[];
}

function AccordionSidebarMenuItem({ title, icon, items }: AccordionSidebarMenuItemProps) {
    const sidebarTrigger = useSidebar();

    return (
        <SidebarMenu onClick={() => (sidebarTrigger.state === 'collapsed' ? sidebarTrigger.setOpen(true) : null)}>
            <Accordion type="single" collapsible>
                <SidebarMenuItem>
                    <AccordionItem value="item-1" className="border-b-0 overflow-hidden">
                        <AccordionTrigger className="hover:no-underline p-2 overflow-hidden">
                            <span className="flex gap-2 group-data-[collapsible=icon]:size-4! group-data-[collapsible=icon]:mr-1!">
                                {icon}
                                <p className="overflow-y-hidden">{title}</p>
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-0">
                            <SidebarMenuSub>
                                {items.map((item, index) => {
                                    return (
                                        <SidebarMenuSubItem key={index}>
                                            <SidebarMenuSubButton asChild>
                                                <a href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    );
                                })}
                            </SidebarMenuSub>
                        </AccordionContent>
                    </AccordionItem>
                </SidebarMenuItem>
            </Accordion>
        </SidebarMenu>
    );
}

export default AdminSidebar;
