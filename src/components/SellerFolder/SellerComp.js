import { useState } from "react";

const SellerComp = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  const clickHandle = (e) => {
    e.preventDefault();
    console.log(name, price, productImage);

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: {name},
        price: {price},
        image: {productImage},
      }),
    })
      .then((res) => res.json())
      .then(console.log);

  }

  return (
    <div className="flex flex-col">
      <h1 className=" font-bold text-3xl m-5 font">Upload A product</h1>
      <form className="flex flex-col ">
        <div>
          <label htmlFor="productName">Product Name : </label>
          <input
            type="text"
            name=""
            id="productName"
            placeholder="Enter product name"
            className=" border-2 border-black border-solid rounded-lg p-2 "
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="productName">Product Price : </label>
          <input
            type="text"
            name=""
            id="productPrice"
            placeholder="Enter product Price"
            className=" border-2 border-black border-solid rounded-lg p-2 "
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="productImage">Upload image : </label>
          <input
            type="file"
            name=""
            id="productImage"
            className="border-2 border-black border-solid rounded-lg p-2 "
            onChange={(e) => setProductImage(e.target.value)}
          />
        </div>
        <button type="submit" className="block bg-slate-400" onSubmit={()=>{clickHandle(e)}} >Upload</button>
      </form>
    </div>
  );
};
export default SellerComp;
