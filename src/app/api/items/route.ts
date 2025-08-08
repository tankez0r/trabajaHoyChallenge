interface Iitem {
  id: number;
  name: string;
  price: number;
}

  const items: Iitem[] = [
{ "id": 1, "name": "Producto 1", "price": 60 },
{ "id": 2, "name": "Producto 2", "price": 100 },
{ "id": 3, "name": "Producto 3", "price": 120 },
{ "id": 4, "name": "Producto 4", "price": 70 }
];

export const GET = async () => {


return new Response(JSON.stringify(items), {
  status: 200,
  headers: { 'Content-Type': 'application/json' }
});
}

export const POST = async (request: Request) => {
  const req = await request.json();
  const item: Iitem = req as unknown as Iitem;
  items.push(item);
  return new Response(JSON.stringify({ message: "Item agregado con éxito", items }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}


export const DELETE = async (request: Request) => {
  const req = await request.json();
  const itemId: number = req.id; 
  const itemIndex = items.findIndex(item => item.id === itemId);

  if (itemIndex !== -1) { 
    items.splice(itemIndex, 1);
    return new Response(JSON.stringify({ message: "Item removido con éxito" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } else {
    return new Response(JSON.stringify({ message: "Item no encontrado" }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 