import { useRouter } from "next/router";
import ProductDetails from "src/components/Product/ProductDetails";

const DynamicProduct = () => {
  const router = useRouter();
  const productName = router.query.detailsId;
  return (
    <div>
      <ProductDetails productName={productName}></ProductDetails>
    </div>
  );
};
export default DynamicProduct;
