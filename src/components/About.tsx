'use client';

import Section from "./Section";



const About = () => {
  return (
    <Section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
      <div className="flex flex-col gap-7">
        <p>
          I craft user-friendly travel experiences at <span className="text-white font-[500]">Travel Trail Holidays</span>.  Leveraging Next.js, MongoDB, Node.js, and Express.js, I build accessible and sustainable travel booking platforms. My prior experience with Django, Python, and JavaScript ensures I can adapt across technologies.
        </p>
        <p>
          But code is just a tool. I'm driven by a passion to create positive change.  I actively seek opportunities to contribute meaningful features within the travel industry, like accessibility options or highlighting eco-friendly travel choices. My goal is to make travel not just seamless, but also inclusive and sustainable.
        </p>
        <p>
          This dedication extends beyond Travel Trail Holidays. I contribute to open-source projects and explore freelance work for social impact organizations. My ultimate goal is to use technology as a bridge to a better future, and I'm constantly seeking ways to leverage my expertise for the greater good.
        </p>
      </div>
    </Section>
  )
}

export default About;