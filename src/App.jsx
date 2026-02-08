import { useState } from "react";
import "./App.css";
import ProductCard from "./components/productCard";
import Cart from "./components/cart";

function App() {
  return (
    <section className="grid place-items-center">
      <section className="max-w-7xl min-h-screen grid grid-cols-(--colums) py-10">
        <ProductCard />
        <Cart />
      </section>
    </section>
  );
}

export default App;
