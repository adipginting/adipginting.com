import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 lg:justify-center lg:flex">
      <div className="max-w-2xl">
        <h1 className="pt-4 pl-4 text-lg ">Hi, I am Adi Ginting. </h1>
        <p className="pt-1 pl-4 text-md">
          A computer programmer currently residing in West Java, Indonesia. I
          have been focusing myself into web development in JavaScript ecosystem
          since 2021 and I am striving to delve more.
        </p>

        <p className="pt-1 pl-4 text-md">
          The current technologies that I use are TypeScript, NodeJS (Express
          and NestJS), Reactjs (NextJS & React Router 7), PostgreSQL, Linux
          (Debian & Ubuntu). On the side, I also learn about Python, Golang, and
          PHP (Laravel).
        </p>
        <p className="pt-1 pl-4 text-md">
          I am a fan (a new convert) of good software engineering practices
          (Clean Code and Clean Architecture) and I strive to apply them
          whenever it is possible.
        </p>
      </div>
    </main>
  );
}
