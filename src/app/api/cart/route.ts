interface Iitem {
  id: number;
  name: string;
  price: number;
}

let cart: Iitem[] = [];
export const POST = async (request: Request) => {
  const req = await request.json();
  const item: Iitem = req as unknown as Iitem;
  cart.push(item);

  return new Response(JSON.stringify({ message: "Item added to cart", cart }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};

export const GET = async () => {
  return new Response(JSON.stringify(cart), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export const DELETE = async () =>  {
    cart = [];
    return new Response(JSON.stringify({ message: "Carro limpio" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
   } 



