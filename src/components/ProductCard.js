import Image from "next/image";
import Button from "@mui/material/Button";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const ProductCard = ({ product }) => {
  return (
    <div className="w-1/4 h-full bg-cyan-600 rounded-lg p-3 place-self-center grid">
      <Image
        src={`${product.images[0]}`}
        alt="logo"
        width={150}
        height={150}
        className="mx-auto rounded-lg"
      />
      <div>{product.title}</div>
      <Button
        sx={{
          color: "white",
          backgroundColor: "black",
        }}
        variant="contained"
        endIcon={<ShoppingCartCheckoutIcon />}
      >
        <p className="text-sm">Add to Cart</p>
      </Button>
    </div>
  );
};
export default ProductCard;
