import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import pizzaCart from "../data/pizzaCart.json";
import { formater } from "../utils/formater";
import { useState } from "react";

function Cart() {
  const initialCart = pizzaCart;

  const [cart, setCart] = useState(initialCart);

  const increase = (id) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
    });
  };

  const decrease = (id) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id && item.count > 0
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0);
    });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex flex-col p-10 items-center">
          <h1 className="text-center text-2xl font-bold mb-8">
            Carrito de compras
          </h1>
          <div className="flex flex-col">
            {cart.map((item) => (
              <div
                className="flex items-center p-4 mb-4 justify-between"
                key={item.id}
              >
                <img src={item.img} alt={item.name} className="w-24 h-24" />
                <div className="ml-4">
                  <h2>{item.name}</h2>
                  <p>${formater(item.price * item.count)}</p>
                </div>
                <div className="ml-10 flex gap-4 items-center">
                  <button
                    className="border-4 border-red-500 px-3 py-1 rounded font-bold"
                    onClick={() => decrease(item.id)}
                  >
                    -
                  </button>
                  <p className="font-semibold">{item.count}</p>
                  <button
                    className="border-4 border-blue-500 px-3 py-1 rounded font-bold"
                    onClick={() => increase(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-5 flex-col gap-4">
            <h2 className="font-bold text-2xl ">
              Total a pagar: ${formater(totalPrice)}
            </h2>
            <button className="bg-black text-white p-1 text-xl rounded w-32">
              Pagar
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
