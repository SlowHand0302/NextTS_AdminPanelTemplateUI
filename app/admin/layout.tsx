'use client';
import { ReactNode } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AdminSidebar from '@/app/admin/components/AdminSidebar';
import AdminHeader from './components/AdminHeader';

const AdminLayout = ({ children }: { children: ReactNode }) => {
    return (
        <SidebarProvider>
            <AdminSidebar />

            <SidebarInset className="flex-1">
                <AdminHeader />
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
};

export default AdminLayout;
