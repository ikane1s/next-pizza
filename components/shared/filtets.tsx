'use client';

import React, { useEffect } from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from '../ui/range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

import { useFilterPriceStore } from '@/store/filterPrice';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';

import qs from 'qs';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  className?: string;
}

interface QueryFilters {
  priceFrom: number;
  priceTo: number;
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients(
    searchParams.get('ingredients') ? searchParams.get('ingredients')?.split(',') : [],
  );

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(searchParams.get('sizes')?.split(',')),
  );
  const [types, { toggle: toggleTypes }] = useSet(
    new Set<string>(
      searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : [],
    ),
  );

  console.log(searchParams.get('sizes'), sizes);

  const { rangeValue, setRangeValue } = useFilterPriceStore();

  // Обработчики для Input
  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.max(0, Math.min(Number(e.target.value), rangeValue[1]));
    setRangeValue([newMin, rangeValue[1]]);
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.min(5000, Math.max(Number(e.target.value), rangeValue[0]));
    setRangeValue([rangeValue[0], newMax]);
  };

  // Обработчик для RangeSlider
  const handleSliderChange = (newValues: number[]) => {
    setRangeValue(newValues);
  };

  useEffect(() => {
    const filters = {
      priceFrom: rangeValue[0],
      priceTo: rangeValue[1],
      pizzaTypes: Array.from(types),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIds),
    };

    const query = qs.stringify(filters, { arrayFormat: 'comma' });
    router.push(`?${query}`, { scroll: false });
  }, [router, rangeValue, types, sizes, selectedIds]);

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
          title="Тип теста"
          name="pizzaTypes"
          className="mb-5"
          onClickCheckbox={toggleTypes}
          selectedValues={types}
          items={[
            { text: 'Тонкое', value: '1' },
            { text: 'Традиционное', value: '2' },
          ]}
        />

        <CheckboxFiltersGroup
          title="Размеры"
          name="sizes"
          className="mb-5"
          onClickCheckbox={toggleSizes}
          selectedValues={sizes}
          items={[
            { text: '20 см', value: '20' },
            { text: '30 см', value: '30' },
            { text: '40 см', value: '40' },
          ]}
        />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            onChange={handleMinInputChange}
            placeholder="0"
            min={0}
            max={5000}
            defaultValue={rangeValue[0]}
          />
          <Input
            type="number"
            onChange={handleMaxInputChange}
            min={0}
            max={5000}
            placeholder="5000"
            defaultValue={rangeValue[1]}
          />
        </div>
        <div className="relative">
          <RangeSlider
            min={0}
            max={5000}
            step={10}
            value={rangeValue}
            onValueChange={handleSliderChange}
          />
        </div>
      </div>
      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={ingredients.slice(0, 6)}
        items={ingredients}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedValues={selectedIds}
      />
    </div>
  );
};
