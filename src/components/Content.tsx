'use client';

import About from "@/components/About";
import Experience from "@/components/Experience";

const Content = () => {
  return (
    <div className="pt-24 lg:py-24 lg:h-screen lg:max-w-[650px] lg:ml-[550px] flex flex-col gap-24">
      <About/>
      <Experience/>
    </div>
  )
}

export default Content;