import React from "react";

const Student = () => {
  return (
    <div className="container mx-auto ">
      <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
        زبان آموز برتر
      </p>
      <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
        نظرات زبان آموزان
      </p>
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
        <img src="/assets/student.svg" alt="" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Martin Watson</p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">استاد زبان انگلیسی</p>
          </div>
          <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
            هیچ راهی وجود ندارد که بتوانم همان پیشرفت را در یادگیری اسپانیایی <br/>داشته باشم
            بدون استفاده از Lingua بهترین بخش این است که در حال حاضر یادگیری اسپانیایی به یکی از بزرگترین<br/> سرگرمی های من تبدیل شده است.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Student;
