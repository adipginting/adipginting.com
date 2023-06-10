import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="https://www.industrialisasi.site/adipginting">blog</a>
        </li>
        <li>
          <Link href="/portofolio">portofolio</Link>
        </li>
        <li>
          <Link href="/resume">resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
