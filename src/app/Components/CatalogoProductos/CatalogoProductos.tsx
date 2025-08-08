"use client";
import useStore from "@/app/hooks/useStore";
import { useItemStore } from "@/app/stores/itemsStore";
import React, { useEffect } from "react";

interface Iitem {
  id: number;
  name: string;
  price: number;
}

const CatalogoProductos = ({ items }: { items: Iitem[] }) => {
  const itemStore = useStore(useItemStore, (state) => state.items);

  useEffect(() => {
    if (items && items.length > 0) {
      useItemStore.setState({ items: items });
    }
  }, [items, itemStore]);



  return (
    <div className="flex flex-wrap justify-center">
      {itemStore?.map((item) => (
        <div
          key={item.id}
          className="p-4 m-2 border border-gray-200 shadow-lg rounded bg-white"
        >
          <h4 className="text-xl font-bold">{item.name}</h4>
          <p className="text-gray-700">
            Price: <span className="font-bold">${item.price.toFixed(2)}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default CatalogoProductos;
