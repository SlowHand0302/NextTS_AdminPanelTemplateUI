import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuGroup,
    DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import { Sparkles, BadgeCheck, LogOut, Bell } from 'lucide-react';
import React, { ReactNode } from 'react';
import { Separator } from './ui/separator';

interface AccountMenuOption {
    label: string;
    url: string;
    icon: ReactNode;
}

interface AccountProps {
    variants?: 'simple' | 'detailed';
    menuOptions?: AccountMenuOption[];
}

const items: AccountMenuOption[] = [
    {
        label: 'Upgrade to Pro',
        url: '#',
        icon: <Sparkles className="flex-shrink-0 size-4" />,
    },
    {
        label: 'Account',
        url: '#',
        icon: <BadgeCheck className="flex-shrink-0 size-4" />,
    },
    {
        label: 'Notification',
        url: '#',
        icon: <Bell className="flex-shrink-0 size-4" />,
    },
    {
        label: 'Log out',
        url: '#',
        icon: <LogOut className="flex-shrink-0 size-4" />,
    },
];

function Account({ menuOptions = items, variants = 'detailed' }: AccountProps) {
    // console.log(keyof items)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm cursor-pointer">
                    <Avatar className="h-8 w-8 rounded-full bg-gray-200 items-center justify-center flex">
                        <AvatarImage src={'data.user.avatar'} alt={'data.user.name'} />
                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    {variants === 'detailed' && (
                        <div className="sm:grid hidden flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">{'data.user.name'}</span>
                            <span className="truncate text-xs">{'data.user.email'}</span>
                        </div>
                    )}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-56 z-10 rounded-lg bg-white shadow-xl border border-gray-200 flex flex-col gap-2 p-2 mt-3">
                <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-8 w-8 rounded-full bg-gray-200 items-center justify-center flex cursor-pointer">
                            <AvatarImage src={'data.user.avatar'} alt={'data.user.name'} />
                            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">{'data.user.name'}</span>
                            <span className="truncate text-xs">{'data.user.email'}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <Separator orientation="horizontal" className="bg-gray-200 w-full" />
                {menuOptions.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <DropdownMenuGroup>
                                <DropdownMenuItem className="flex items-center justify-start gap-2 text-[14px] hover:bg-slate-100 hover:outline-none px-[16px] py-[10px] rounded-sm cursor-pointer">
                                    {item.icon}
                                    {item.label}
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </React.Fragment>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Account;
