import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-light">What I Offer</h4>
      <h1 className="text-center text-5xl font-light">My Services</h1>
      <p className="max-w-2xl mx-auto mt-5 mb-12 font-serif">
        I provide specialized software development and data management solutions
        for academic and research environments. With over six years of
        experience at Addis Ababa University and ethiopian public health
        institute, I offer expertise in:
        <br />
        <div className="mt-2 mx-5.5">
          <li className="list-decimal list-inside ml-0">
            Developing responsive and scalable web applications for research
            projects.
          </li>
          <li className="list-decimal list-inside ml-0">
            Designing, managing, and optimizing databases to ensure accurate and
            reliable data.
          </li>
          <li className="list-decimal list-inside ml-0">
            Implementing data collection systems integrated with mobile data
            collection tools.
          </li>
          <li className="list-decimal list-inside ml-0">
            {" "}
            Data cleaning, migration, and system maintenance for research
            datasets.
          </li>
          <li className="list-decimal list-inside ml-0">
            Creating secure and user-friendly digital tools to support research activities.
          </li>
        </div>
        <br />I am committed to delivering high-quality solutions that enhance
        productivity, improve data integrity, and support organizational goals.
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
