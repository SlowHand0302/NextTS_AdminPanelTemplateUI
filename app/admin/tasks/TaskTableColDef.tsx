import { Task } from '@/types/Task.entity';
import { ColumnDef } from '@tanstack/react-table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LuPackageSearch, LuPackageOpen, LuCopy } from 'react-icons/lu';
import { Checkbox } from '@/components/ui/checkbox';

export const columns: ColumnDef<Task>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'id',
        header: ({ column }) => {
            return (
                <div
                    className="flex items-center gap-1 group cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Task
                    <div className="px-1.5 py-1 group-hover:bg-slate-200 group-hover:text-black rounded-lg">
                        <ArrowUpDown size={16} />
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'title',
        header: ({ column }) => {
            return (
                <div
                    className="flex items-center gap-1 group cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Title
                    <div className="px-1.5 py-1 group-hover:bg-slate-200 group-hover:text-black rounded-lg">
                        <ArrowUpDown size={16} />
                    </div>
                </div>
            );
        },
        cell: ({ row }) => {
            return <div className="line-clamp-2">{row.original.title}</div>;
        },
    },
    {
        accessorKey: 'description',
        header: ({ column }) => {
            return (
                <div
                    className="flex items-center gap-1 group cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Description
                    <div className="px-1.5 py-1 group-hover:bg-slate-200 group-hover:text-black rounded-lg">
                        <ArrowUpDown size={16} />
                    </div>
                </div>
            );
        },
        cell: ({ row }) => {
            return <div className="line-clamp-2">{row.original.description}</div>;
        },
    },
    {
        accessorKey: 'dueDate',
        header: () => {
            return <div className="text-center">Deadline</div>;
        },
        cell: ({ row }) => {
            const task = row.original;
            const newDate =
                task.dueDate &&
                (task.dueDate.getMonth() > 8 ? task.dueDate.getMonth() + 1 : '0' + (task.dueDate.getMonth() + 1)) +
                    '/' +
                    (task.dueDate.getDate() > 9 ? task.dueDate.getDate() : '0' + task.dueDate.getDate()) +
                    '/' +
                    task.dueDate.getFullYear();
            return <div className="font-medium text-center">{newDate}</div>;
        },
    },
    {
        accessorKey: 'priority',
        header: () => {
            return <div className="text-center">Priority</div>;
        },
        cell: ({ row }) => {
            const state = row.getValue('priority');
            switch (state) {
                case 'High':
                    return (
                        <div className="font-medium capitalize mx-auto rounded-xl text-white px-1.5 py-1 w-fit bg-red-400">
                            {state}
                        </div>
                    );
                case 'Low':
                    return (
                        <div className="font-medium capitalize mx-auto rounded-xl text-white px-1.5 py-1 w-fit bg-green-400">
                            {state}
                        </div>
                    );

                case 'Medium':
                    return (
                        <div className="font-medium capitalize mx-auto rounded-xl text-white px-1.5 py-1 w-fit bg-yellow-400">
                            {state}
                        </div>
                    );
                default:
                    break;
            }
        },
        // for col filter single options
        filterFn: (row, columnId, filterValue) => {
            return row.original.priority === filterValue; // true or false based on your custom logic
        },
    },
    {
        accessorKey: 'status',
        header: () => {
            return <div className="text-center">Status</div>;
        },
        cell: ({ row }) => {
            const state = row.getValue('status');
            switch (state) {
                case 'To Do':
                    return (
                        <div className="font-medium whitespace-nowrap capitalize mx-auto rounded-xl text-white px-1.5 py-1 w-fit bg-red-400">
                            {state}
                        </div>
                    );
                case 'Completed':
                    return (
                        <div className="font-medium whitespace-nowrap capitalize mx-auto rounded-xl text-white px-1.5 py-1 w-fit bg-green-400">
                            {state}
                        </div>
                    );
                case 'On Hold':
                    return (
                        <div className="font-medium whitespace-nowrap capitalize mx-auto rounded-xl text-white px-1.5 py-1 w-fit bg-slate-400">
                            {state}
                        </div>
                    );
                case 'In Progress':
                    return (
                        <div className="font-medium whitespace-nowrap capitalize mx-auto rounded-xl text-white px-1.5 py-1 w-fit bg-yellow-400">
                            {state}
                        </div>
                    );
                default:
                    break;
            }
        },
        // for col filter mulitple options
        filterFn: (row, columnId, filterValue) => {
            return filterValue.length === 0 ? row.original.status : filterValue.includes(row.original.status); // true or false based on your custom logic
        },
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const task = row.original;
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 ">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(task.id.toString())}>
                            <LuCopy />
                            Copy task ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LuPackageSearch />
                            View task details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LuPackageOpen />
                            Edit task details
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
