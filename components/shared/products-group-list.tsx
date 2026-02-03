import React from 'react';
import { Title } from './title';
import { ProductCard } from './product-card';

interface Props {
  title: string;
  products: any[];
  listClassName?: string;
  categoryId: string;
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  products,
  listClassName,
  categoryId,
  className,
}) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className="grid grid-cols-3 gap-[50px]">
        {products
          .filter((product) => product.items.length > 0)
          .map((product, i) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.items[0].price}
            />
          ))}
      </div>
    </div>
  );
};
