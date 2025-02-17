import { Calendar, Inbox, Search, Settings, LayoutDashboardIcon } from 'lucide-react';
import { LuPackage } from 'react-icons/lu';
import { SideBarItem, AccordionSidebarMenuItemProps } from '@/app/admin/components/AdminSidebar';
import { FaGoogleDrive, FaAws } from 'react-icons/fa6';
import { TbBrandOnedrive, TbBrandFirebase } from 'react-icons/tb';

export const ApplicationSidebarItems: SideBarItem[] = [
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

export const StoragesSidebarItems: SideBarItem[] = [
    {
        title: 'Overview',
        url: '/admin/storages',
        icon: LayoutDashboardIcon,
    },
    {
        title: 'Drive',
        url: '/admin/storages/drive',
        icon: FaGoogleDrive,
    },
    {
        title: 'AWS S3',
        url: '/admin/storages/s3',
        icon: FaAws,
    },
    {
        title: 'OneDrive',
        url: '/admin/storages/onedrive',
        icon: TbBrandOnedrive,
    },
    {
        title: 'Firebase',
        url: '/admin/storages/firebase',
        icon: TbBrandFirebase,
    },
];

