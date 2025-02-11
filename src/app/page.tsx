import Link from "next/link";

export default function Home() {
  return (
    <main>
      <article className="left">
        <p>
          Hello, I am Adi Ginting a computer programmer from Indonesia. I am
          currently working in web development mainly using TypeScript and PHP.
          I am currently the process of branching out to other domains
          particularly DevOps, data engineering, and AI engineering.
        </p>

        <p>
          You can see my online presence on
          <Link
            href="https://github.com/adipginting"
            className="ml-1 mr-1 text-blue-900 ml- hover:text-blue-400"
          >
            Github
          </Link>
          and
          <Link
            href="https://linkedin.com/in/adipginting"
            className="ml-1 text-blue-900 hover:text-blue-400"
          >
            Linkedin
          </Link>
          .
        </p>
      </article>
      <article className="right"></article>
    </main>
  );
}
