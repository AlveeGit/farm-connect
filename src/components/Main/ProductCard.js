import Image from "next/image";
import Button from "@mui/material/Button";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const ProductCard = ({ product }) => {
  return (
    <div className="relative w-full bg-cyan-600 rounded-lg p-3 place-self-center grid ">
      <Image
        src={`${product.images[0]}`}
        alt="logo"
        width={150}
        height={150}
        className="mx-auto rounded-lg"
      />
      <div className="h-28 mx-auto font-bold mt-5">{product.title}</div>
      <button className="w-full absolute flex  bottom-0 items-center justify-between bg-black text-white p-2 rounded-lg ">
        <p className="text-sm">Add to Cart</p>
        <ShoppingCartCheckoutIcon />
      </button>
    </div>
  );
};
export default ProductCard;
