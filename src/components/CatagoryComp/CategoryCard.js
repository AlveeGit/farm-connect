import Image from "next/image";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Link from "next/link";
const CatagoryCard = ({ product }) => {
  return (
    <Link href={`/category/${product}`}>
      <div className="relative w-full rounded-lg p-3 place-self-center grid bg-cyan-600 cursor-pointer">
        <li>{product}</li>
      </div>
    </Link>
  );
};
export default CatagoryCard;
