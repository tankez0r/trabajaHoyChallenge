import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Iitem {
  id: number;
  name: string;
  price: number;
}

interface cartStoreState {
    cartItems: Iitem[];
    setCart: (item:  Iitem[]) => void;
    removeItem: (id: number) => void;
    clearItems: () => void;
    getItems: () => Iitem[];
    presupuestoRestante: number;
    setPresupuestoRestante: (amount: number) => void;
    presupuesto: number;
    setPresupuesto: (amount: number) => void;
}

export const useCartStore = create<cartStoreState>()(
  persist(
    (set, get) => ({
        cartItems: [],
        setCart: (item: Iitem[]) => set(() => ({ cartItems: item })),
        removeItem: (id: number) => set((state) => ({ cartItems: state.cartItems.filter(item => item.id !== id) })),
        clearItems: () => set({ cartItems: [] }),
        getItems: () => get().cartItems,
        presupuestoRestante: 0,
        setPresupuestoRestante: (amount: number) => set({ presupuestoRestante: amount }),
        presupuesto: 0,
        setPresupuesto: (amount: number) => set({ presupuesto: amount }),
    }),
    {
      name: 'cart-storage', 
    },
  ),
)