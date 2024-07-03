import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const Card = () => {
  const projects = [
    {
      id: 1,
      Name: "Portfolio",
      dec: "Personal Modern Portfolio Web Site. React and Next js",
      img: "/pr1.svg",
      iconLists: ["/React.svg", "/Tailwindcss.svg", "/TypeScript.svg"],
      link: "www.google.com",
    },
    {
      id: 2,
      Name: "E-commerce",
      dec: "This is an academic project i was create this project for my HND assignment.",
      img: "/pr2.svg",
      iconLists: ["/React.svg", "/Tailwindcss.svg"],
      link: "https://luxelane1.netlify.app/",
    },
    {
      id: 3,
      Name: "Sign up with Dashboard ",
      dec: "A simple sign up page with dashboard in front-end Project",
      img: "/pr3.svg",
      iconLists: ["/HTML 5.svg", "/CSS3.svg", "/JavaScript.svg"],
      link: "/about",
    },
    {
      id: 4,
      Name: "Landing Page",
      dec: "This is a landing page project Using HTML and css.",
      img: "/pr4.svg",
      iconLists: [
        "/React.svg",
        "/Tailwindcss.svg",
        "/JavaScript.svg",
        "/TypeScript.svg",
      ],
      link: "/about",
    },
  ];
  return (
    <div className='py-20'>
      <div className='relative flex justify-center items-center z-20'>
        <h1 className='text-3xl font-black text-white'>
          Recent
          <span className='bg-gradient-to-r from-red-1 to-purple-0.1 bg-clip-text text-transparent'>
            Projects
          </span>
        </h1>
      </div>
      {/* <div className='z-10 relative w-full max-w-lg flex justify-center items-center'>
        <div className='absolute top-60 left-4 w-72 h-72 bg-[#16022A] opacity-60 blur-3xl rounded-full mix-blend-multiply filter animate-blob'></div>
        <div className='absolute top-60 left-80 w-72 h-72 bg-[#9D36AE] opacity-60 blur-3xl rounded-full mix-blend-multiply filter animate-blob animation-delay-2000'></div>
        <div className='absolute top-80 left-80 w-72 h-72 bg-[#C90A4F] opacity-60 blur-3xl rounded-full mix-blend-multiply filter animate-blob animation-delay-6000'></div>
        <div className='absolute top-80 left-10 w-72 h-72 bg-[#B689E2] opacity-60 blur-3xl rounded-full mix-blend-multiply filter animate-blob animation-delay-4000'></div>
      </div> */}
      <div className='flex flex-wrap items-center justify-center p-4 gap-20 mt-10'>
        {projects.map((item) => (
          <div
            className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'
            key={item.id}
          >
            <PinContainer title={item.Name} href={item.link}>
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                {/* <div
                  className='relative w-full h-full overflow-hidden lg:rounded-3xl'
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src='/bg.png' alt='bgimg' />
                </div> */}
                <img
                  src={item.img}
                  alt='cover'
                  className='z-10 absolute bottom-0'
                />
              </div>

              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {item.Name}
              </h1>

              <p
                className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.dec}
              </p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt='icon5' className='p-2' />
                    </div>
                  ))}
                </div>

                <div className='flex justify-center items-center'>
                  <p className='flex lg:text-xl md:text-xs text-sm text-purple-0.1'>
                    Check Live Site
                  </p>
                  <FaLocationArrow className='ms-3' color='#CBACF9' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
