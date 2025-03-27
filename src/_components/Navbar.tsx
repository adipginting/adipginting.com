import Link from "next/link";
import { Github, Linkedin, Shrub } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="shadow-md h-[50px] flex justify-between ">
      <div className="flex items-center">
        <Link href="/" className="text-pink-800 hover:text-purple-950">
          <div className="flex items-center gap-x-2">
            <Shrub />
            Adi
          </div>
        </Link>
      </div>
      <ul className="flex items-center">
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
            className="text-pink-800 hover:text-purple-950"
          >
            <Github />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/adipginting"
            className="text-pink-800 hover:text-purple-950"
          >
            <Linkedin />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
