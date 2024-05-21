'use client';

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">
            Diwakar Jha
          </Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software Developer</h2>
        <p className="mt-4 max-w-xs leading-normal">I specialize in crafting flawless digital interfaces, prioritizing precision, engagement, and accessibility to ensure a seamless and inclusive user experience.</p>
        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            <li>
              <Link href="#about" className="group flex items-center py-3 active">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">ABOUT</span>
              </Link>
            </li>
            <li>
              <Link href="#skills" className="group flex items-center py-3 active">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">SKILLS</span>
              </Link>
            </li>
            <li>
              <Link href="#experience" className="group flex items-center py-3 active">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">EXPERIENCE</span>
              </Link>
            </li>
            <li>
              <Link href="#projects" className="group flex items-center py-3 active">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">PROJECTS</span>
              </Link>
            </li>
            <li>
              <Link href="#contact" className="group flex items-center py-3 active">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">CONTACT</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 text-xs shrink-0">
          <Link href="https://github.com/diwakarjha554" className="block hover:text-slate-200" target="_blank" rel="noreferrer noopener">
            <span className="sr-only">GitHub</span>
            <FaGithub size={24}/>
          </Link>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <Link href="https://www.linkedin.com/in/diwakarjha554/" className="block hover:text-slate-200" target="_blank" rel="noreferrer noopener">
            <span className="sr-only">GitHub</span>
            <FaLinkedin size={24}/>
          </Link>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <Link href="https://github.com/diwakarjha554" className="block hover:text-slate-200" target="_blank" rel="noreferrer noopener">
            <span className="sr-only">GitHub</span>
            <FaXTwitter size={24}/>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;