import React from "react";

const Values = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
        چرا باید ما را انتخاب کنید
      </p>
      <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
        ویژگی های ما
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v1.svg" alt="v1" />
          <p className="text-2xl font-semibold">اتاق های مکالمه</p>
          <p className="text-gray-500 text-center">            در مدرسه ما مهارت های صحبت کردن خود<br/> را تمرین خواهید کرد و فقط <br/>احساسات مثبت زیادی دریافت خواهید کرد!

          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v2.svg" alt="v1" />
          <p className="text-2xl font-semibold">کنترل کیفیت</p>
          <p className="text-gray-500 text-center">            در مدرسه ما مهارت های صحبت کردن خود<br/> را تمرین خواهید کرد و فقط <br/>احساسات مثبت زیادی دریافت خواهید کرد!
          </p>
        </div> <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v3.svg" alt="v1" />
          <p className="text-2xl font-semibold">تجزیه و تحلیل پیشرفت</p>
          <p className="text-gray-500 text-center">
            در مدرسه ما مهارت های صحبت کردن خود<br/> را تمرین خواهید کرد و فقط <br/>احساسات مثبت زیادی دریافت خواهید کرد!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
