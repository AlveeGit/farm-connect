import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[url('../../public/assets/black-bg2.jpg')]">
      <div className="pt-5">
        <input
          type="text"
          className= "bg-[#ffffffe1]  rounded-lg w-4/5 flex mx-auto "
          placeholder=" Search " v 
        />
      </div>

      <div className=" w-full h-80 flex flex-row place-content-between  ">
        <div className=" w-1/2 m-2 grid place-self-center">
          <h1 className="text-3xl text-white font-bold mx-auto">
            Find The Best Product <br className="hidden sm:inline-block" />
            with <span className="text-yellow-600">Reliability</span>
          </h1>
        </div>

        <div className=" w-1/2 m-2 grid">
          <Image
            src="/assets/hero-veg.png"
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
