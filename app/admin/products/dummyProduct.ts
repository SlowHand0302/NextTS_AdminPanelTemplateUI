import { Product } from '@/types/Product.entity';

export const products: Product[] = Array.from({ length: 50 }, (_, i) => {
    const statuses: Product['status'][] = ['unavailable', 'available', 'soldout', 'discontinued'];
    const colors = ['Red', 'Blue', 'Green'];
    const sizes = ['S', 'M', 'L', 'XL'];

    return {
        _id: `prod_${i + 1}`,
        image: ``,
        name: `Product ${i + 1}`,
        originalPrice: 500, // Replace dynamic random value
        sellPrice: 400, // Replace dynamic random value
        status: statuses[i % statuses.length],
        variants:
            i % 2 === 0
                ? [
                      {
                          attribute: 'Color',
                          values: colors[i % colors.length],
                      },
                      {
                          attribute: 'Size',
                          values: sizes[i % sizes.length],
                      },
                  ]
                : undefined,
    };
});
