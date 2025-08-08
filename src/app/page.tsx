'use client';
import CarroOptimo from "./Components/CarroOptimo/CarroOptimo";
import CatalogoProductos from "./Components/CatalogoProductos/CatalogoProductos";
import FormPresupuesto from "./Components/FormPresupuesto/FormPresupuesto";
import { useFetchItems } from './hooks/useFetchItems';

export default  function Home() {

  const {items} = useFetchItems();

  return (
    <div className="flex min-h-screen flex-col items-center p-5 max-w-[95wh]">
      <h1 className="mb-3">Trabaja Hoy Challenge</h1>
      <section className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-2xl shadow-lg">
        <h3 className="text-3xl">Optimizador de presupuesto</h3>
        <FormPresupuesto />
        <CatalogoProductos items={items} />
        <CarroOptimo  />

      </section>
    </div>
  );
}
