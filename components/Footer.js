import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <img src="/assets/footerlogo.svg" alt="footer lgo" />
          <p className="text-center lg:text-start">تهران ، صادقیه ، جنت آباد جنوبی ، خیابان احمدآباد ، پلاک 22</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">آموزشگاه ما</p>
          <p className="text-base">استخدام</p>
          <p className="text-base">اساتید</p>
          <p className="text-base">حمایت ها</p>
          <p className="text-base">تماس با ما</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">محصولات</p>
          <p className="text-base">دوره ها</p>
          <p className="text-base">قیمت ها</p>
          <p className="text-base">وبلاگ</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">لینک های مفید</p>
          <p className="text-base">قوانین و مقرارت</p>
          <p className="text-base">حریم خصوصی</p>
        </div>
        <div className="flex items-center justify-center gap-5">
                <BsFacebook className="text-3xl text-gray-500"/>
                <BsTwitter className="text-3xl text-gray-500"/>
                <BsInstagram className="text-3xl text-gray-500"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
