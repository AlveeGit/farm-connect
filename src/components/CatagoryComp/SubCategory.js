import { useEffect, useState } from "react";
import SubCategoryCard from "./SubCategoryCard";

const SubCategory = ({ subCate }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/category/${subCate}`
      );
      const data = await res.json();
      setProducts(data.products);
    };
    getData();
  }, [subCate]);

  return (
    <div className=" ">
      <h1 className="text-3xl font-bold pl-5 p-5">Product Category : {subCate}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-full gap-2 ">
        {products.map((product) => (
          <SubCategoryCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default SubCategory;
