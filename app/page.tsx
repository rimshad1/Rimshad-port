import About from "@/components/About";
import Card from "@/components/Card";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main className='bg-black-100 relative flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='w-full max-w-7xl'>
        <Navbar />
        <Hero />
        <About />
        <Card />
        <Work />
        <Contact />
      </div>
    </main>
  );
}
