"use client";
import Link from "next/link";
import { MailIcon, Shrub } from "lucide-react";
import { useRouter } from "next/navigation";
import Github from "./github-mark.svg";
import Linkedin from "./LinkedIn_icon.svg";
import { Menu } from "lucide-react";
import { useState } from "react";

const Hamburger = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const router = useRouter();
  const toggleMenu = () => {
    if (isOpened) setIsOpened(false);
    else setIsOpened(true);
  };

  return (
    <nav className="block sm:hidden ">
      <div className="flex justify-center shadow-md p-4 sticky top-0 bg-slate-100">
        {isOpened ? (
          <ul className="flex flex-col gap-4">
            <li>
              <button
                className="flex items-center text-pink-800 justify-center w-full hover:text-purple-950"
                onClick={toggleMenu}
              >
                <Menu />
              </button>
            </li>
            <li>
              <Link
                href="/"
                className="flex justify-center w-full text-pink-800 wflex hover:text-purple-950"
                onClick={toggleMenu}
              >
                <div className="flex items-center gap-x-1">
                  <Shrub />
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex justify-center w-full text-pink-800 wflex hover:text-purple-950"
                onClick={toggleMenu}
              >
                <div className="flex items-center gap-x-1">About</div>
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="flex justify-center w-full text-pink-800 hover:text-purple-950"
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="flex justify-center w-full text-pink-800 hover:text-purple-950"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/elsewhere"
                className="flex justify-center w-full text-pink-800 hover:text-purple-950"
                onClick={toggleMenu}
              >
                Elsewhere
              </Link>
            </li>
            <li>
              <Link
                href="https://www.github.com/adipginting"
                target="_blank"
                className="flex items-center justify-center w-full text-pink-800 just hover:text-purple-950"
                onClick={toggleMenu}
              >
                <Github />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/adipginting"
                target="_blank"
                className="flex items-center justify-center w-full text-pink-800 hover:text-purple-950"
                onClick={toggleMenu}
              >
                <Linkedin />
              </Link>
            </li>
            <li>
              <button
                className="flex items-center text-pink-800 justify-center w-full hover:text-purple-950"
                onClick={() => {
                  toggleMenu();
                  router.push("mailto:adi@adipginting.com");
                }}
              >
                <MailIcon />
              </button>
            </li>
          </ul>
        ) : (
          <button onClick={toggleMenu}>
            <Menu />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Hamburger;
