import productDetail from "../../data.json";
import emptyIllustration from "../assets/images/illustration-empty-cart.svg";

function Cart() {
  return (
    <section className="max-h-fit bg-rose-50 p-8 rounded-2xl">
      <h1 className="text-red text-2xl font-bold mb-2">Your Cart()</h1>
      <div className="flex flex-col items-center justify-center">
        <img src={emptyIllustration} aria-hidden="true" />
        <p className="text-rose-300 font-semibold">
          Your added items will appear here
        </p>
      </div>
    </section>
  );
}

export default Cart;
