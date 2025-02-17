'use client';
import React, { ReactNode, useEffect } from 'react';
import { SidebarProvider, useSidebar } from '@/components/ui/sidebar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import StoragesSubSidebar from '../components/StoragesSubSidebar';

interface FilePagesLayoutProps {
    children: ReactNode;
}

const FilePagesLayout = ({ children }: FilePagesLayoutProps) => {
    return (
        <SidebarProvider>
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel className="relative max-h-full" defaultSize={25} minSize={25} maxSize={50}>
                    <StoragesSubSidebar />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75} minSize={50} maxSize={75}>
                    <main className="grow">{children}</main>
                </ResizablePanel>
            </ResizablePanelGroup>
        </SidebarProvider>
    );
};

export default FilePagesLayout;
