'use client';

import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from '../ui/range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

import { useFilterPriceStore } from '@/store/filterPrice';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
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

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
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
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: 'Сырный соус', value: '1' },
          { text: 'Моццарелла', value: '2' },
          { text: 'Чеснок', value: '3' },
          { text: 'Солённые огурчики', value: '4' },
          { text: 'Красный лук', value: '5' },
          { text: 'Томаты', value: '6' },
        ]}
        items={[
          { text: 'Сырный соус', value: '1' },
          { text: 'Моццарелла', value: '2' },
          { text: 'Чеснок', value: '3' },
          { text: 'Солённые огурчики', value: '4' },
          { text: 'Красный лук', value: '5' },
          { text: 'Томаты', value: '6' },
          { text: 'Сырный соус', value: '1' },
          { text: 'Моццарелла', value: '2' },
          { text: 'Чеснок', value: '3' },
          { text: 'Солённые огурчики', value: '4' },
          { text: 'Красный лук', value: '5' },
          { text: 'Томаты', value: '6' },
        ]}
      />
    </div>
  );
};
