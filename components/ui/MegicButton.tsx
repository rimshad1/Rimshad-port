"use client";
import React from "react";
import { cn } from "@/utils/cn";

export const ButtonMagic = ({
  title,
  icon,
  position,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  
  otherClasses?: string;
}) => {
  return (
    <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none md:w-60 md:mt-10'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span
        className={`inline-flex h-full w-full font-bold cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 text-sm text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};
