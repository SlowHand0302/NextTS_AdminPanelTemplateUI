'use client';
import React from 'react';

import { products } from './dummyProduct';
import DataView from './DataView';

const page = () => {
    return (
        <main className="p-3">
            <DataView products={products} />
        </main>
    );
};

export default page;
