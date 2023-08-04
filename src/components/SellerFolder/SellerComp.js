"use client";
import { useState } from "react";

const SellerComp = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [productImage, setProductImage] = useState("");

  console.log(name, price, category, productImage);

  const clickHandle = (e) => {
    
    e.preventDefault();

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: { name },
        price: { price },
        category: { category },
        image: { productImage },
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="flex flex-col mx-auto">
      <div className="flex flex-col   ">
        <form className="flex flex-col mx-auto w-[250px]">
          <h1 className=" font-bold text-2xl m-5 font">Upload A product</h1>
          <input
            type="text"
            name=""
            id="productName"
            placeholder="Enter product name"
            className=" border-2 border-black border-solid rounded-lg p-2 h-12"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            name=""
            id="productPrice"
            placeholder="Enter product Price"
            className=" border-2 border-black border-solid rounded-lg p-2 h-12"
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="text"
            name=""
            id="productCategory"
            placeholder="Enter product Category"
            className=" border-2 border-black border-solid rounded-lg p-2 h-12"
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            type="file"
            name=""
            id="productImage"
            className="border-2 border-black border-solid rounded-lg p-2 h-12 w-[250px] "
            onChange={(e) => setProductImage(e.target.value)}
          />

          <button className="w-40" onSubmit={clickHandle}>
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};
export default SellerComp;
