import { useState } from "react";
import "./App.css";
import ProductCard from "./components/productCard";
import Cart from "./components/cart";

function App() {
  return (
    <section className="grid place-items-center bg-rose-100 ">
      <section className="max-w-7xl min-h-screen grid grid-cols-(--colums) py-10 gap-5 ">
        <ProductCard />
        <Cart />
      </section>
    </section>
  );
}

export default App;
