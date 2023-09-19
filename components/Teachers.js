import React from "react";

const Teacher = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
       استادان برتر
      </p>
      <p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
      بهترین اساتید مارو بشناسید
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20">
        <div className="flex flex-col gap-5 ">
          <img src="/assets/t1.svg" alt="v1" />
          <p className="text-2xl font-semibold">احمد رضایی</p>
          <div className="flex items-center gap-2">
            <img src="/assets/italy.svg" alt="itersfgjds" />
            <p className="text-gray-500">
          استاد زبان ایتالیایی
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/t2.svg" alt="v1" />
          <p className="text-2xl font-semibold">زهره کاظمی</p>
          <div className="flex items-center gap-2">
            <img src="/assets/spain.svg" alt="itersfgjds" />
            <p className="text-gray-500">
            استاد زبان اسپانیایی
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/t3.svg" alt="v1" />
          <p className="text-2xl font-semibold">کوروش احمدی</p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">
          استاد زبان انگلیسی
          </p>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Teacher;
