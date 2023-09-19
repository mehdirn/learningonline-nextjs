import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="container mx-auto my-10 ">
      <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 mt-10">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className="text-2xl sm:text-4xl md:text-xxl lg:text-xxl font-medium">
            <br className="lg:flex hidden"/>  روش منحصر به فرد
برای یادگیری زبان های <br className="lg:flex hidden"/>
خارجی به صورت آنلاین
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              با سرعت بالا، با دسترسی مادام العمر <br  className="lg:flex hidden"/> در تلفن همراه و دسکتاپ، یاد بگیرید
            </p>
            <button className="btn btn-sm lg:btn-lg bg-[#524fd5] text-white rounded-full border-none w-36 lg:w-44 capitalize">شروع کنید</button>
          </div>
          <img src="/assets/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
