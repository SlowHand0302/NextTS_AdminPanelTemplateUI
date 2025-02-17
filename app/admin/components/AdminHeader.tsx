import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import Account from '@/components/Account';
import Breadcrumb from '@/components/Breadcrumb';
import { IoHome } from 'react-icons/io5';
import { LuBell } from 'react-icons/lu';

function AdminHeader() {
    return (
        <header className="flex h-16 shrink-0 px-2 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b-[1px] border-gray-100">
            <div className="flex justify-start items-center gap-2 flex-0">
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb homeHref="admin" HomeIcon={<IoHome />} />
            </div>
            <div className="flex gap-1 items-center">
                <div className="relative bg-gray-200 rounded-full p-1 cursor-pointer">
                    <LuBell size={24} strokeWidth={1.5} />
                    <div className="rounded-full px-1 p-0.5 bg-red-500 text-white font-bold text-[8px] absolute top-0 right-0 translate-x-1 -translate-y-1">
                        9+
                    </div>
                </div>
                <Account variants="simple" />
            </div>
        </header>
    );
}

export default AdminHeader;
