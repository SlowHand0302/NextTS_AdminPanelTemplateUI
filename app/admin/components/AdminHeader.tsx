import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import Account from '@/components/Account';
import Breadcrumb from '@/components/Breadcrumb';
import { IoHome } from 'react-icons/io5';

function AdminHeader() {
    return (
        <header className="flex h-16 shrink-0 px-4 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b-[1px] border-gray-100">
            <div className="flex justify-start items-center gap-2 flex-0">
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb homeHref="admin" HomeIcon={<IoHome />} />
            </div>
            <Account variants="simple" />
        </header>
    );
}

export default AdminHeader;
