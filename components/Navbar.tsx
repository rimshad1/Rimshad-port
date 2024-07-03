import React from "react";

const Navbar = () => {
  const items = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#Card" },
    { name: "Contact", href: "/" },
  ];

  return (
    <div className='w-full flex items-center justify-center mt-10 z-20'>
      <div className="flex justify-center items-center w-full sm:w-[80%] ">
        <div className='bg-black-100/[0.4] z-10 w-[100%] sm:w-[70%] px-8 border-black-1/[0.3] border rounded-full h-10 flex justify-between items-center'>
          {items.map((item, index) => (
            <div key={index}>
              <div className='text-white cursor-pointer text-sm sm:text-lg'>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
