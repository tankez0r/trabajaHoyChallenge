
interface Iitem {
  id: number;
  name: string;
  price: number;
}

interface presupuestoReturn {
    items: Iitem[];
    presupuestoRestante: number;
}

export const calcularMejorPresupuesto = (items: Iitem[], presupuesto: number): presupuestoReturn => {
  let presupuestoRestante = presupuesto;
  const itemsSeleccionados: Iitem[] = [];

  const itemsOrdenados = [...items].sort((a, b) => b.price - a.price);

  for (const item of itemsOrdenados) {
    if (item.price <= presupuestoRestante) {
      itemsSeleccionados.push(item);
      presupuestoRestante -= item.price;
    }
  }

  return {
    items: itemsSeleccionados,
    presupuestoRestante
  };
};

