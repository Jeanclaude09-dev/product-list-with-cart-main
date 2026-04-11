import { useApp } from "@/context/appContext";
import { CircleMinus, CirclePlus, ShoppingCart } from "lucide-react";
import { useState } from "react";

function ProductCard() {
  const { data } = useApp();
  const [cartItems, setCartItems] = useState({});


  // prev is current state before the update
  const addToCart = (id) => {
    setCartItems(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrement = (id) => {
    setCartItems(prev => {
      if (prev[id] <= 1) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  return (

    <section>
      <h1 className="text-rose-900 text-4xl font-bold mb-5">Desserts</h1>
      {/* when you use curly braces {} after the arrow =>,
        you need to explicitly tell JavaScript what to return
        use () instead
        */}
      <div className="grid grid-cols-3 gap-5 group">
        {data.map((items) => (
          <div key={items.id}>
            <div
              className={`flex flex-col ${cartItems[items.id] ? "border-2 border-orange-500" : ""} rounded-2xl items-center group relative mb-8`}>
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcset={items.image.desktop}
                  alt={items.image.alt}
                  className="rounded-2xl"
                />
                <source
                  media="(min-width: 660px)"
                  srcset={items.image.tablet}
                  alt={items.image.alt}
                  className="rounded-2xl "
                />
                <img
                  src={items.image.mobile}
                  alt={items.image.alt}
                  className="rounded-2xl"
                />
              </picture>


              {cartItems[items.id] ? (
                <div className="flex items-center gap-2 absolute -bottom-5 px-4 py-2 bg-orange-500 rounded-full  cursor-pointer ">
                  <button onClick={() => decrement(items.id)}><CircleMinus className="cursor-pointer" /></button>
                  <span>{cartItems[items.id]}</span>
                  <button onClick={() => addToCart(items.id)}><CirclePlus className="cursor-pointer" /></button>
                </div>
              ) :
                (
                  <button
                    onClick={() => addToCart(items.id)}
                    className="flex items-center gap-2 absolute -bottom-5 px-4 py-2 bg-rose-50 rounded-full  border border-rose-500 cursor-pointer ">
                    <ShoppingCart color="#c73a0f" />
                    <span>Add to Cart</span>
                  </button>
                )}


            </div>
            <p className="text-rose-300">{items.category}</p>
            <h2 className="text-rose-900 text-lg">{items.name}</h2>
            <span className="text-red font-semibold">
              ${items.price.toFixed(2)}
            </span>
            {/* toFixed method format number */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCard;
