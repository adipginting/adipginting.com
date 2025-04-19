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
          The current technologies that I use are TypeScript, NodeJS (Express
          and NestJS), Reactjs (NextJS & React Router 7), PostgreSQL, Linux
          (Debian & Ubuntu).
        </p>
        <p>
          On the side, I learn about Python and PHP (Laravel). I am a fan of
          good software engineering practices and I strive to apply them
          whenever it is possible.
        </p>

        <p>
          I am currently working on my personal projects and currently in the
          process of transforming them to a better software. I use them to
          practice good software engineering practices.
        </p>
      </div>
    </main>
  );
}
