'use client';

import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { useMemo } from 'react';
const chartData = [
    { storage: 'drive', used: 275, fill: 'hsl(var(--chart-1))' },
    { storage: 'onedrive', used: 200, fill: 'hsl(var(--chart-2))' },
    { storage: 'firebase', used: 187, fill: 'hsl(var(--chart-3))' },
    { storage: 'awss3', used: 173, fill: 'hsl(var(--chart-4))' },
    { storage: 'remain', used: 90, fill: 'hsl(var(--secondary))' },
];

const chartConfig = {
    used: {
        label: 'Used',
    },
    drive: {
        label: 'Drive',
        color: 'hsl(var(--chart-1))',
    },
    onedrive: {
        label: 'One Drive',
        color: 'hsl(var(--chart-2))',
    },
    firebase: {
        label: 'Firebase',
        color: 'hsl(var(--chart-3))',
    },
    awss3: {
        label: 'AWS S3',
        color: 'hsl(var(--chart-4))',
    },
    remain: {
        label: 'Remaining',
        color: 'hsl(var(--secondary-foreground))',
    },
} satisfies ChartConfig;

export function Component() {
    const totalVisitors = useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.used, 0);
    }, []);

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Pie Chart - Donut Active</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
                    <PieChart>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Pie
                            data={chartData}
                            dataKey="used"
                            nameKey="storage"
                            innerRadius={80}
                            outerRadius={100}
                            strokeWidth={5}
                            activeIndex={4}
                            cornerRadius={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalVisitors.toLocaleString() + ' ' + 'MB'}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Used
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">Showing total visitors for the last 6 months</div>
            </CardFooter>
        </Card>
    );
}
