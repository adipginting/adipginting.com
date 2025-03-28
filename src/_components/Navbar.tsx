"use client";
import Link from "next/link";
import { MailIcon, Shrub } from "lucide-react";
import { useRouter } from "next/navigation";
import Github from "./github-mark.svg";
import Linkedin from "./LinkedIn_icon.svg";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="shadow-md h-[50px] flex justify-between p-4 ">
      <div className="flex items-center">
        <Link href="/" className="text-pink-800 hover:text-purple-950">
          <div className="flex items-center gap-x-1">
            <Shrub />
            Adi
          </div>
        </Link>
      </div>
      <ul className="flex items-center gap-x-4">
        <li>
          <Link href="/blog" className="text-pink-800 hover:text-purple-950">
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="text-pink-800 hover:text-purple-950"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="https://www.github.com/adipginting"
            className="flex items-center text-pink-800 hover:text-purple-950"
          >
            <Github />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/adipginting"
            className="flex items-center text-pink-800 hover:text-purple-950"
          >
            <Linkedin />
          </Link>
        </li>
        <li>
          <button
            className="flex items-center text-pink-800 hover:text-purple-950"
            onClick={() => router.push("mailto:adi@adipginting.com")}
          >
            <MailIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
