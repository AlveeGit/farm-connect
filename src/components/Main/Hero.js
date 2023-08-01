import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
const Hero = () => {
  return (
    <div className="bg-[url('/images/black-bg2.jpg')]">
      <div className="pt-5 flex content-around">
        <input
          type="text"
          className="bg-[#ffffffe1]   w-4/5  p-5"
          placeholder="Search"
        />
        <button className="bg-[#ffffffe1] w-1/12   place-items-center">
          <SearchIcon className="w-7 h-7 text-black" />
        </button>
      </div>

      <div className=" w-full h-80 grid grid-cols-1 md:grid-cols-2 place-content-between  ">
        <div className=" w-1/2 m-2 grid place-self-center">
          <h1 className="text-3xl text-white font-bold mx-auto">
            Find The Best Product <br className="hidden sm:inline-block" />
            with <span className="text-[#43e499]">Reliability</span>
          </h1>
        </div>

        <div className=" w-1/2 m-2 grid place-self-center">
          <Image
            src="/images/hero-veg.png"
            alt="logo"
            width={250}
            height={250}
            className=" w-full  md:w-3/5  grid place-self-center"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
