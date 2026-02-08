import productDetail from "../../data.json";
import { ShoppingCart } from "lucide-react";

function ProductCard() {
  return (
    <section>
      <h1>Desserts</h1>
      <div className="grid grid-cols-3 gap-4 ">
        {productDetail.map((items) => (
          <div>
            <div key={items.id} className="flex flex-col items-center">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcset={items.image.desktop}
                  alt={items.image.alt}
                />
                <source
                  media="(min-width: 660px)"
                  srcset={items.image.tablet}
                  alt={items.image.alt}
                />
                <img src={items.image.mobile} alt={items.image.alt} />
              </picture>
              <button className="flex gap-2">
                <ShoppingCart />
                <span>Add to Cart</span>
              </button>
            </div>
            <p>{items.category}</p>
            <h2>{items.name}</h2>
            <span>{items.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCard;
