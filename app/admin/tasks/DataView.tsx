import React, { useState } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    SortingState,
    getSortedRowModel,
    VisibilityState,
    ColumnFiltersState,
    getFilteredRowModel,
    getFacetedRowModel,
    getFacetedMinMaxValues,
    getFacetedUniqueValues,
} from '@tanstack/react-table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { DataTable } from '@/components/DataTable';
import { DataTablePagination } from '@/components/DataTablePagination';
import { DataTableViewOptions } from '@/components/DataTableViewOptions';
import { columns } from './TaskTableColDef';
import { DataTableColFilter } from '@/components/DataTableColFilter';
import { Task } from '@/types/Task.entity';
import { IoCloseOutline } from 'react-icons/io5';

interface DataViewProps {
    tasks: Task[];
}

const DataView = ({ tasks }: DataViewProps) => {
    const [rowSelection, setRowSelection] = useState({});
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

    const table = useReactTable({
        data: tasks,
        columns,
        onSortingChange: setSorting,
        onRowSelectionChange: setRowSelection,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(), // for columns sorting
        getFilteredRowModel: getFilteredRowModel(), // for columns filtering
        getPaginationRowModel: getPaginationRowModel(), // for table pagination
        getFacetedRowModel: getFacetedRowModel(), // client-side faceting, must have this model to implement 2 funcs below
        getFacetedUniqueValues: getFacetedUniqueValues(), // generate unique values for select filter/autocomplete
        getFacetedMinMaxValues: getFacetedMinMaxValues(), // generate min/max values for range filter
        state: {
            sorting,
            rowSelection,
            columnFilters,
            columnVisibility,
        },
    });

    return (
        <section className="w-full space-y-2">
            <div className="flex items-center gap-2">
                <Input
                    placeholder="Filter Task Title..."
                    value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
                    onChange={(event) => table.getColumn('title')?.setFilterValue(event.target.value)}
                    className="max-w-sm h-8"
                />
                <DataTableColFilter column={table.getColumn('status')} variant="multiple" />
                <DataTableColFilter column={table.getColumn('priority')} variant="single" />
                {columnFilters.length > 0 || Object.keys(columnVisibility).length > 0 ? (
                    <Button
                        variant="outline"
                        size="sm"
                        className="hidden capitalize lg:flex"
                        onClick={() => {
                            table.resetColumnFilters(true);
                            table.resetColumnVisibility(true);
                        }}
                    >
                        <IoCloseOutline />
                        Reset
                    </Button>
                ) : null}
                <div className="ml-auto">
                    <DataTableViewOptions table={table}/>
                </div>
            </div>
            <DataTable table={table} stickyHeader={true}/>
            <DataTablePagination table={table} pageSizes={[5, 10, 15, 20, 30]} />
        </section>
    );
};

export default DataView;
