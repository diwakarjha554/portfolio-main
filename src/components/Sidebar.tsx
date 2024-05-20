'use client';

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-10 justify-between py-10 lg:py-24 lg:h-screen w-full lg:w-[400px] lg:fixed">

      <div className="flex flex-col gap-5 lg:gap-3">
        <span className="text-5xl font-semibold">Diwakar Jha</span>
        <span className="text-lg">Full Stack Software Developer</span>
        <span>I specialize in crafting flawless digital interfaces, prioritizing precision, engagement, and accessibility to ensure a seamless and inclusive user experience.</span>

        <div className="hidden lg:flex mt-12">
          links
        </div>
      </div>

      <div className="flex flex-row gap-5">
        <Link href="https://github.com/diwakarjha554" target="_blank">
          <FaGithub size={24}/>
        </Link>
        <Link href="https://www.linkedin.com/in/diwakarjha554/" target="_blank">
          <FaLinkedin size={24}/>
        </Link>
        <Link href="/" target="_blank">
          <FaXTwitter size={24}/>
        </Link>
      </div>

    </div>
  )
}

export default Sidebar;