import { assets, toolsData } from "@/assets/assets";
import Image from "next/image";
import { infoList } from "../../assets/assets";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-light">Introduction</h4>
      <h2 className="text-center text-5xl font-light ">About Me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-100 rounded-3xl max-w-none">
          <Image
            src={assets.profile_img}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-1xl font-light">
            I a'm an experienced software developer with a strong background in
            building scalable web applications using modern technologies.
            throughout my career, i have worked on diverse projects involving
            full-stack development, database design, and user experience
            optimization. I am passionate about creating efficient and
            user-friendly applications that solve real-world problems. with a
            commitment to continuous learning and staying up-to-date with
            industry trends, i strive to deliver high-quality solutions that
            meet client needs and exceed expectations. I am a collaborative team
            player who enjoys working in dynamic environments and contributing
            to the success of projects. I am excited to bring my skills and
            expertise to new challenges and opportunities in the field of
            software development.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-cyan-400 hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-light">Tools I Use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500" key={index}>
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
