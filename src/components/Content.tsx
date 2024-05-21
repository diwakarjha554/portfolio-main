'use client';

import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Content = () => {
  return (
    <div className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}

export default Content;