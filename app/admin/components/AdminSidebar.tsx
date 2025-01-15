import {
    Calendar,
    Inbox,
    Search,
    Settings,
    VideoIcon,
    ImageIcon,
    AudioLines,
    StoreIcon,
    LayoutDashboardIcon,
} from 'lucide-react';
import { LuPackage } from 'react-icons/lu';
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

// Menu items.
const items = [
    {
        title: 'Dashboard',
        url: '/admin',
        icon: LayoutDashboardIcon,
    },
    {
        title: 'Products',
        url: '/admin/products',
        icon: LuPackage,
    },
    {
        title: 'Inbox',
        url: '#',
        icon: Inbox,
    },
    {
        title: 'Calendar',
        url: '#',
        icon: Calendar,
    },
    {
        title: 'Search',
        url: '#',
        icon: Search,
    },
    {
        title: 'Settings',
        url: '#',
        icon: Settings,
    },
];

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
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
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
                        <AccrodionSidebarMenuItem />
                    </SidebarGroupContent>
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

function AccrodionSidebarMenuItem() {
    const sidebarTrigger = useSidebar();

    return (
        <SidebarMenu onClick={() => (sidebarTrigger.state === 'collapsed' ? sidebarTrigger.setOpen(true) : null)}>
            <Accordion type="single" collapsible>
                <SidebarMenuItem>
                    <AccordionItem value="item-1" className="border-b-0 overflow-hidden">
                        <AccordionTrigger className="hover:no-underline p-2 overflow-hidden">
                            <span className="flex gap-2 group-data-[collapsible=icon]:!size-4 group-data-[collapsible=icon]:!mr-1">
                                <StoreIcon className="flex-shrink-0 size-4" />
                                <p className="overflow-y-hidden">Media Gallery</p>
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-0">
                            <SidebarMenuSub>
                                {mediaQuery.map((item, index) => {
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
