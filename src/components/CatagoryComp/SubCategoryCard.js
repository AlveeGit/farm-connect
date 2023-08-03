import Image from "next/image";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Link from "next/link";

const SubCategoryCard = ({ product }) => {
  console.log(product);
  return (
    <div className="relative w-full h-[260px] bg-cyan-200 rounded-lg p-3 flex flex-col  ">
      <div className="w-[150px] h-[150px] justify-center flex mx-auto ">
        <Image
          src={`${product.images[0]}`}
          alt="logo"
          width={150}
          height={150}
          className="mx-auto rounded-lg"
        />
      </div>

      <div className=" mx-auto font-bold ">{product.title}</div>
      <div className="w-full flex justify-between">
        <div className="">Price: ${product.price}</div>
        <div className="">Rating: {product.rating}</div>
      </div>

      {/* <Link className="" href={`/details/${product.category}`}>
        <button className="w-full absolute flex mb-1 right-0 bottom-10 items-center justify-center  place-self-center">
          Details
        </button>
      </Link> */}

      <button className="w-full absolute flex  bottom-0 right-0 items-center justify-between bg-black text-white p-2 rounded-lg m-0">
        <p className="text-sm">Add to Cart</p>
        <ShoppingCartCheckoutIcon />
      </button>
    </div>
  );
};
export default SubCategoryCard