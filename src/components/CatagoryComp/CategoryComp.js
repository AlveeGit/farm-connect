import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const CategoryComp = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      setProducts(data);
    };
    getData();
  }, []);

  console.log(products);
  return (
    <div className="h-screen">
      <div>
        <h1 className=" font-bold text-3xl p-3 font">Category</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-full gap-2 ">
          {products.map((product) => (
            <CategoryCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategoryComp;
