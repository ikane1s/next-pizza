import { create } from 'zustand';

interface PriceProps {
  rangeValue: [number, number];
  setRangeValue: (range: [number, number]) => void;
}

export const useFilterPriceStore = create<PriceProps>((set) => ({
  rangeValue: [0, 5000],
  setRangeValue: (rangeValue) => set({ rangeValue }),
}));

export const initPriceStore = (priceFrom: number, priceTo: number) => {
  useFilterPriceStore.setState({ rangeValue: [priceFrom, priceTo] });
};
