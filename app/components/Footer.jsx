import Image from "next/image";
import { assets, serviceData } from "@/assets/assets";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center ">
        <Image
          src={assets.logo}
          alt="Footer Background"
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="Email Icon" className="w-6 " />
          gammegech1887@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[1-%] mt-12 py-6">
        <p>© 2026 Gemechu Getachow. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-between mt-4 sm:mt-0">
            <li><a target="_blank" href="">GitHub</a></li>
            <li><a target="_blank" href="">LinkidIn</a></li>
            <li><a target="_blank" href="">Twitter</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
