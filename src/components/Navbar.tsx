import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="https://www.industrialisasi.site/adipginting">blog</a>
        </li>
        <li>
          <Link href="/portofolio" className="hover:pointer-events-auto">
            portofolio
          </Link>
        </li>
        <li>
          <Link href="/resume" className="hover:pointer-events-auto">
            resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
