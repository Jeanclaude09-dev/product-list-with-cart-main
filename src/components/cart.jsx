import { useApp } from "@/context/appContext";
import emptyIllustration from "../assets/images/illustration-empty-cart.svg";
import { CircleX } from "lucide-react";
import carbonNeutral from "../assets/images/icon-carbon-neutral.svg";


export default function Cart() {
  const { data, cartItems, removeFromCart, decrement, addToCart } = useApp();

  // Build an array of items that are in the cart
  const itemsInCart = data.filter(item => cartItems[item.id]);
  const totalPrice = itemsInCart.reduce(
    (sum, item) => sum + item.price * cartItems[item.id], 0
  );


  return (<>
    {
      itemsInCart.length === 0 ?
        <section className="max-h-fit bg-rose-50 p-8 rounded-2xl">
          <h1 className="text-red text-2xl font-bold mb-2">Your Cart()</h1>
          <div className="flex flex-col items-center justify-center">
            <img src={emptyIllustration} aria-hidden="true" />
            <p className="text-rose-300 font-semibold">
              Your added items will appear here
            </p>
          </div>
        </section> :

        <section className="max-h-fit bg-rose-50 p-8 rounded-2xl flex flex-col">
          <h1 className="text-red text-2xl font-bold mb-2">
            Your Cart ({itemsInCart.length})
          </h1>

          {itemsInCart.map(item => (
            <div key={item.id} className="flex justify-between items-center py-3 border-b border-rose-100">
              <div>
                <p className="font-semibold text-rose-900">{item.name}</p>
                <div className="flex gap-3 text-sm">
                  <span className="text-orange-500 font-bold">{cartItems[item.id]}x</span>
                  <span className="text-rose-400">@ ${item.price.toFixed(2)}</span>
                  <span className="text-rose-500 font-semibold">
                    ${(item.price * cartItems[item.id]).toFixed(2)}
                  </span>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)}><CircleX className="text-rose-300 hover:text-rose-500 transition-colors cursor-pointer" /></button>
            </div>
          ))}

          <div className="flex items-center justify-between text-lg">
            <span className="text-rose-400 ">Order Total</span>
            <span className="text-3xl text-rose-900 font-bold py-4">${totalPrice.toFixed(2)}</span>
          </div>

          <div className="bg-rose-100 flex justify-center items-center px-3 py-2 gap-2 rounded-full text-rose-">
            <img src={carbonNeutral} aria-hidden="true" />
            <p>This is a <span className="text-rose-900 font-semibold">carbon-neutral</span> delivery</p>
          </div>


          <button className="W-full px-4 py-2 bg-orange-500 text-rose-50 cursor-pointer rounded-full mt-5 ">Confirm Order</button>
        </section>
    }
  </>
  );
}