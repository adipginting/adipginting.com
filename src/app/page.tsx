import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 lg:justify-center lg:flex">
      <div className="max-w-2xl flex flex-col gap-4">
        <h1 className="text-lg ">Hi, I am Adi Ginting. </h1>
        <p>
          A computer programmer currently residing in West Java, Indonesia. I
          have been focusing myself into web development in JavaScript ecosystem
          since 2021 and I am striving to delve more.
        </p>

        <p>
          The current technologies that I use are TypeScript, Node.js, React,
          PostgreSQL, Windows, Debian, and Ubuntu.
        </p>
        <p>
          On the side, I delve to Python and Java ecosystem. I am a fan of good
          software engineering practices and I strive to apply them whenever it
          is possible.
        </p>
      </div>
    </main>
  );
}
