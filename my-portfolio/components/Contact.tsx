import React from "react";
import { ButtonMagic } from "./ui/MegicButton";
import contact from "@/public/contact.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div className='flex justify-center items-center py-20'>
      <div className='bg-[#080218] w-[800px] h-full shadow-[0_0_100px_20px_#4E0C38] rounded-xl lg:flex  gap-10 justify-between items-center px-2 sm:px-10'>
        <div className='w-full flex flex-col gap-2 justify-center items-center py-5 md:py-10'>
          <h2 className='text-xl font-bold'>Contact Me</h2>
          <div>
            <Image src={contact} alt='Contact' />
          </div>
        </div>
        <div className='w-full flex flex-col gap-2 justify-center items-center py-5 md:py-10'>
          <input
            type='text'
            className='w-full text-white px-5 py-1 rounded-sm'
            placeholder='Name'
          />
          <input
            type='text'
            className='w-full text-white px-5 py-1 rounded-sm'
            placeholder='Email'
          />
          <textarea
            className='px-5 rounded-sm w-full'
            rows={5}
            placeholder='Message...'
          ></textarea>
          <ButtonMagic
            title='submit'
            position='right'
            icon=''
            otherClasses=''
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
