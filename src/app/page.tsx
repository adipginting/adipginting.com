import Link from "next/link";

export default function Home() {
  return (
    <main>
      <article className="left">
        <p>
          Adi Ginting a computer programmer from Indonesia.
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
