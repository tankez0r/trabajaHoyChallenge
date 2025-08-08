"use client";
import useStore from "@/app/hooks/useStore";
import { useCartStore } from "@/app/stores/cartStore";

const CarroOptimo = () => {
  const cart = useStore(useCartStore, (state) => state.cartItems);
  const presupuesto = useStore(useCartStore, (state) => state);
  const presupuestoRestante = useStore(useCartStore, (state) => state.presupuestoRestante);

  return (
    <div className="bg-gray-500/10 p-4 rounded-2xl shadow-lg">
      <h4 className="text-3xl">Tu mejor selección de compra</h4>
      <span className="text-sm">
        A continuación te damos la lista de productos que coinciden con las
        mejores opciones para tu presupuesto
      </span>
      <div className="flex flex-wrap justify-center">
        {cart && cart.length > 0 ? (
          cart?.map((item) => {
            return (
              <div
                key={item.id}
                className="p-4 m-4 border-green-400 border-2 shadow-lg rounded flex-1/5 text-center bg-green-500/10"
              >
                <h4 className="text-xl font-bold">{item?.name}</h4>
                <p className="text-gray-700">
                  Price: <span className="font-bold">${item?.price}</span>
                </p>
              </div>
            );
          })
        ) : (
          <span className="text-amber-600">
            Aun no ingresaste tu presupuesto de compra
          </span>
        )}
      </div>

{cart && cart.length > 0 && (
  <>
      <hr />

      <div className="my-2 flex flex-col items-center">
        <h4 className="text-2xl">Tu Presupuesto total:</h4>
        <div>
          <span className="text-3xl font-bold text-green-600">
        ${presupuesto?.presupuesto}
          </span>
        </div>
      </div>
 <hr />
        <div className="my-2 flex flex-col items-center">
        <h4 className="text-2xl">Tu Presupuesto restante:</h4>
        <div>
          <span className="text-3xl font-bold text-red-600">
          ${presupuestoRestante}
          </span>
        </div>
      </div>
      </>
)}


    </div>
  );
};

export default CarroOptimo;
