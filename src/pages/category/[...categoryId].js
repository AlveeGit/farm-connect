import { useRouter } from "next/router";
import SubCategory from "src/components/CatagoryComp/SubCategory";

const SingleCatagory = () => {
  const router = useRouter();
  const subCate = router.query.categoryId;
  // console.log(subCate);
  return (
    <div>
      <SubCategory subCate={subCate}></SubCategory>
    </div>
  );
};
export default SingleCatagory;
