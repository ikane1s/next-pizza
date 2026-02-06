import { create } from 'zustand';

interface State {
  rangeValue: number[];
  setRangeValue: (value: number[]) => void;
}

export const useFilterPriceStore = create<State>()((set) => ({
  rangeValue: [0, 5000],
  setRangeValue: (rangeValue: number[]) => set({ rangeValue }),
}));
