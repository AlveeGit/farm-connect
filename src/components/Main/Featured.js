import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Featured = () => {
  const [products, setProducts] = useState([]);

  const url = process.env.NEXT_PUBLIC_FEATURED_URL;

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data.products);
    };
    getData();
  }, []);

  return (
    <div className=" ">
      <h1 className="text-3xl font-bold pl-5 p-5">Featured Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-full gap-2 ">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
