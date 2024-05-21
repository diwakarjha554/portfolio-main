'use client';

import Section from "./Section";



const About = () => {
  return (
    <Section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
      <div>
        <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem consectetur temporibus quos ad quam ex vero, et maxime eligendi explicabo qui corporis ducimus. Quasi non repudiandae, voluptatem dolor dolorem praesentium ullam magni sit id vel architecto deserunt quas, fugit, officia ipsam dolorum hic alias enim cumque cupiditate mollitia est excepturi labore. Delectus voluptatem fugiat tenetur est quod pariatur quis quae libero tempore, harum eos ut, aliquam autem cum officiis facere. Aliquam voluptate quidem consequuntur adipisci illum unde laborum repudiandae voluptatem magni quis suscipit cum nihil labore tempore praesentium hic deleniti et vel recusandae, nostrum eius quia. Omnis quod quae quaerat!</p>
      </div>
    </Section>
  )
}

export default About;