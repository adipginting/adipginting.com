import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="shadow-md">
      <ul>
        <li>
          <Link href="/" className="text-blue-900 hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-blue-900 hover:text-blue-400">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-blue-900 hover:text-blue-400">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/resume" className="text-blue-900 hover:text-blue-400">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
