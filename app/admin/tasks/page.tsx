'use client';
import React, { useEffect, useState } from 'react';

import DataView from './DataView';
import { tasks } from './dummyTask';
import { Task } from '@/types/Task.entity';

const page = () => {
    const [data, setData] = useState<Task[]>([]);
    useEffect(() => {
        setData(tasks);
    }, []);
    return <main className="p-3">{data && <DataView tasks={data} />}</main>;
};

export default page;
