
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

  presupuesto = parseInt(presupuesto.toString(), 10);
  const n = items.length;
  const dp: number[][] = Array(n + 1).fill(null).map(() => Array(presupuesto + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    const currentItem = items[i - 1];
    for (let j = 1; j <= presupuesto; j++) {
      if (currentItem.price <= j) {

        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - currentItem.price] + currentItem.price);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }



  console.log('lkasd',dp);
  const itemsSeleccionados: Iitem[] = [];
  let res = dp[n][presupuesto];
  let w = presupuesto;
console.log(res)
  for (let i = n; i > 0 && res > 0; i--) {

    if (res !== dp[i - 1][w]) {
      const selectedItem = items[i - 1];
      itemsSeleccionados.push(selectedItem);
      res -= selectedItem.price;
      w -= selectedItem.price;
    }
  }

  itemsSeleccionados.reverse();

  const presupuestoTotalSeleccionado = itemsSeleccionados.reduce((sum, item) => sum + item.price, 0);
  const presupuestoRestante = presupuesto - presupuestoTotalSeleccionado;

  return {
    items: itemsSeleccionados,
    presupuestoRestante
  };
};
