'use client';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
];

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: '#2563eb',
    },
    mobile: {
        label: 'Mobile',
        color: '#60a5fa',
    },
} satisfies ChartConfig;

export function ChartDemo() {
    return (
        <Card className="w-full">
            <CardHeader className="flex-row items-center justify-between">
                <CardTitle className='text-3xl'>Overview</CardTitle>
                <div className="shadow-sm bg-slate-300 w-fit flex rounded-md gap-1 p-1">
                    <Button className="flex items-center justify-center gap-1 rounded bg-transparent px-3 py-2 text-sm font-medium shadow-none outline-non hover:bg-slate-200">
                        Day
                    </Button>
                    <Button className="flex items-center justify-center gap-1 rounded bg-transparent px-3 py-2 text-sm font-medium shadow-none outline-non text-black bg-slate-200 hover:bg-slate-200">
                        Month
                    </Button>
                    <Button className="flex items-center justify-center gap-1 rounded bg-transparent px-3 py-2 text-sm font-medium shadow-none outline-non hover:bg-slate-200">
                        Year
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
