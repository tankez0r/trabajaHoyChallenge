'use client';
import useStore from "@/app/hooks/useStore";
import { useCartStore } from "@/app/stores/cartStore";
import { useItemStore } from "@/app/stores/itemsStore";
import { calcularMejorPresupuesto } from "@/app/utils/calcularPresupuesto";
import React from "react";
import { useForm } from "react-hook-form";

const FormPresupuesto = () => {

type Inputs = {
    presupuesto: number;
}
interface Iitem {
  id: number;
  name: string;
  price: number;
}


const itemsStore = useStore(useItemStore, (state) => state.items) as unknown as Iitem[];
const { setCart, setPresupuestoRestante, clearItems, setPresupuesto } = useCartStore()

const {
    register,
    handleSubmit,
    formState: { errors },
    reset
} = useForm<Inputs>();

const onSubmit = async (data: Inputs) => {
await  fetch(`/api/cart/`, {
    method: 'DELETE',
})
console.log("submit")
clearItems();

const {items, presupuestoRestante} = calcularMejorPresupuesto(itemsStore, data.presupuesto);

items.forEach((item: Iitem) => {
  fetch(`/api/cart/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
})
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});

setCart(items);
reset();
setPresupuestoRestante(presupuestoRestante);
setPresupuesto(data.presupuesto)
}

  return (
    <div className="">
      <form  onSubmit={handleSubmit(onSubmit) } className="flex flex-col items-center mt-2">
        <div className="mb-8">
          <label
            htmlFor="presupuesto"
            className="block text-lg font-medium text-gray-800"
          >
            Presupuesto Máximo (USD)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
            {...register("presupuesto", {required: true, min: 1})}
              type="number"
              name="presupuesto"
              id="presupuesto"
              className=" bg-gray-100 block w-full rounded-md border-gray-300 py- pl-4 pr-24 focus:border-none sm:text-lg"
              placeholder="ingrese su presupuesto"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-lg">$</span>
            </div>
          </div>
                {errors.presupuesto && <span className="text-red-500 text-sm">Este campo es obligatorio</span>}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 my-2 w-full"
          >
            Calcular
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPresupuesto;
