import { useEffect, useState } from "react";

const ProductDetails = ({ productName }) => {
  const [product, setProduct] = useState([]);


  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/category/${subCate}`
      );
      const data = await res.json();
      setProduct(data.products);
    };
    getData();
  }, []);
  return <div>ProductDetails</div>;
};
export default ProductDetails