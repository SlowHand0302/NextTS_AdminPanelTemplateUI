'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Product } from '@/types/Product.entity';
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
import { useMemo } from 'react';

export const useProductColumns = () => {
    return useMemo<ColumnDef<Product, any>[]>(
        () => [
            {
                id: 'select',
                header: ({ table }) => (
                    <Checkbox
                        checked={
                            table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
                        }
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
                accessorKey: 'image',
                header: '',
                cell: ({ row }) => {
                    return <div className="px-10 py-12 bg-slate-200 rounded-xl"></div>;
                },
                enableSorting: false,
                enableColumnFilter: false,
                enableGlobalFilter: false,
            },
            {
                accessorKey: 'name',
                header: ({ column }) => {
                    return (
                        <div
                            className="flex items-center gap-1 group cursor-pointer"
                            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        >
                            Product Name
                            <div className="px-1.5 py-1 group-hover:bg-slate-200 group-hover:text-black rounded-lg">
                                <ArrowUpDown size={16} />
                            </div>
                        </div>
                    );
                },
            },
            {
                accessorKey: 'originalPrice',
                header: ({ column }) => {
                    return (
                        <div
                            className="flex items-center gap-1 group cursor-pointer"
                            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        >
                            Price
                            <div className="px-1.5 py-1 group-hover:bg-slate-200 group-hover:text-black rounded-lg">
                                <ArrowUpDown size={16} />
                            </div>
                        </div>
                    );
                },
                cell: ({ row }) => {
                    const amount = parseFloat(row.getValue('originalPrice'));
                    const formatted = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(amount);

                    return <div className="font-medium">{formatted}</div>;
                },
            },
            {
                accessorKey: 'sellPrice',
                header: ({ column }) => {
                    return (
                        <div
                            className="flex items-center gap-1 group cursor-pointer"
                            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        >
                            Sell Price
                            <div className="px-1.5 py-1 group-hover:bg-slate-200 group-hover:text-black rounded-lg">
                                <ArrowUpDown size={16} />
                            </div>
                        </div>
                    );
                },
                cell: ({ row }) => {
                    const amount = parseFloat(row.getValue('sellPrice'));
                    const formatted = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(amount);

                    return <div className="font-medium">{formatted}</div>;
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
                        case 'unavailable':
                            return (
                                <div className="font-medium capitalize mx-auto rounded-xl text-white px-1.5 py-1 w-fit bg-red-400">
                                    {state}
                                </div>
                            );
                        case 'available':
                            return (
                                <div className="font-medium capitalize mx-auto rounded-xl text-white px-1.5 py-1 w-fit bg-green-400">
                                    {state}
                                </div>
                            );
                        case 'soldout':
                            return (
                                <div className="font-medium capitalize mx-auto rounded-xl text-white px-1.5 py-1 w-fit bg-slate-400">
                                    {state}
                                </div>
                            );
                        case 'discontinued':
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
                // filterFn: (row, columnId, filterValue) => {
                //     return row.original.status === filterValue; // true or false based on your custom logic
                // },
                // for col filter mulitple options
                filterFn: (row, columnId, filterValue) => {
                    return filterValue.length === 0 ? row.original.status : filterValue.includes(row.original.status); // true or false based on your custom logic
                },
            },
            {
                id: 'discount',
                accessorFn: (row) => `-${Math.round(((row.originalPrice - row.sellPrice) / row.originalPrice) * 100)}%`,
                header: ({ column }) => {
                    return (
                        <div
                            className="flex items-center justify-start gap-1 group cursor-pointer"
                            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        >
                            Discount
                            <div className="px-1.5 py-1 group-hover:bg-slate-200 group-hover:text-black rounded-lg">
                                <ArrowUpDown size={16} />
                            </div>
                        </div>
                    );
                },
                cell: ({ row }) => {
                    return <p className="text-start">{row.getValue('discount')}</p>;
                },
            },
            {
                id: 'actions',
                enableHiding: false,
                cell: ({ row }) => {
                    const products = row.original;

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
                                <DropdownMenuItem onClick={() => navigator.clipboard.writeText(products.name)}>
                                    <LuCopy />
                                    Copy payment ID
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LuPackageSearch />
                                    View product details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LuPackageOpen />
                                    Edit product details
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    );
                },
            },
        ],
        [],
    );
};
