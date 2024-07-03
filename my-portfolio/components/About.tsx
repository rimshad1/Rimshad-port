import React from "react";
import Image from "next/image";
import My from "../public/my.svg";

const About = () => {
  return (
    <div className='py-20'>
      <div className='relative flex justify-center items-center z-20'>
        <h1 className='text-3xl font-black bg-gradient-to-r from-red-1 to-purple-0.1 bg-clip-text text-transparent'>
          About
          <span className='text-white'>Me</span>
        </h1>
      </div>
      <div className='lg:flex items-center justify-center sm:px-20 gap-5 '>
        <div>
          <Image src={My} alt='MY' className='sm:w-[120rem] w-auto h-auto' />
        </div>
        <div>
          <p className='text-center sm:text-start'>
            Hi I am Rimshad Ahamed Dedicated and skilled Front-End Developer
            with hands-on experience in React.js and Next.js using JavaScript
            and TypeScript. Seeking to leverage my expertise in web development
            to contribute effectively to innovative projects.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
