export type Product = {
    _id: string;
    image: string;  
    name: string;
    originalPrice: number;
    sellPrice: number;
    status: 'unavailable' | 'available' | 'soldout' | 'discontinued';
    variants?: Variants[];
};

export type Variants = {
    [key: string]: string | string[] | null | undefined;
    attribute: string;
    values: string | string[] | null | undefined;
};
