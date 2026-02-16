import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-light">What I Offer</h4>
      <h1 className="text-center text-5xl font-light">My Services</h1>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-light">
        I offer a range of services to help businesses and individuals achieve
        their goals efficiently and effectively. i am Software Developer from
        Addis Ababa, Ethiopia with 10+ years of experience in web development
        and software engineering.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 my-10 overflow-visible">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 transition-all hover:shadow-black cursor-pointer hover:bg-cyan-500 hover:-translate-1 duration-500 "
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg mt-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href="" className="flex items-center gap-2 text-sm mt-5">
              {link} Read More{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
