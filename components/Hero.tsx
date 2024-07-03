import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { ButtonMagic } from "./ui/MegicButton";
import { MdSimCardDownload } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <div className='pb-20 pt-36'>
        <div>
          <Spotlight
            className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
            fill='#C90A4F'
          />
          <Spotlight
            className='top-10 left-full h-[80vh] w-[50vw]'
            fill='#9D36AE'
          />
          <Spotlight
            className='top-28 left-80 h-[80vh] w-[50vw]'
            fill='#B689E2'
          />
        </div>
        <div className='flex py-10 relative'>
          <div
            className='h-[70vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center'
          >
            <div
              className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-sm font-semibold text-center text-blue-100 max-w-80'>
              Hey I&apos;m Rimshad
            </h2>
          </div>
          <div className='max-w-[89vw] md:max-w-2xl my-10 lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h1 className='text-[30px] sm:text:2xl md:text-4xl font-extrabold text-center flex flex-col'>
              Welcome To My
              <span className='text-[40px] sm:text-4xl md:text-6xl'>
                Portfolio{" "}
                <span className='bg-gradient-to-r from-purple-1 to-red-1 bg-clip-text text-transparent'>
                  Profile
                </span>
              </span>
            </h1>
          </div>
          <div className='sm:flex justify-center items-center space-y-4 sm:space-x-4 sm:space-y-0'>
            <div className="flex items-center justify-center">
              <a
                href='https://www.fiverr.com/rima_011/do-web-design-and-web-development-with-html-css-javascript-php-bootstrap'
                target='_blank'
              >
                <ButtonMagic title='Hire Me' icon='' position='' />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href='' target='_blank'>
                <ButtonMagic
                  title='Download CV'
                  icon={<MdSimCardDownload color='#9D36AE' />}
                  position='right'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
