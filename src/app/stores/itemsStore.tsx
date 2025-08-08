import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Iitem {
  id: number;
  name: string;
  price: number;
}

interface ItemStoreState {
  items: Iitem[];
  addItem: (item: Iitem) => void;
  removeItem: (id: number) => void;
  clearItems: () => void;
  getItems: () => Iitem[];
}

export const useItemStore = create<ItemStoreState>()(
  persist(
    (set, get) => ({
        items: [],
        addItem: (item: Iitem) => set((state) => ({ items: [...state.items, item] })),
        removeItem: (id: number) => set((state) => ({ items: state.items.filter(item => item.id !== id) })),
        clearItems: () => set({ items: [] }),
        getItems: () => get().items,
    }),
    {
      name: 'items-storage',
    },
  ),
)