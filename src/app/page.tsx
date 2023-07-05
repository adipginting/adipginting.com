export default function Home() {
  return (
    <main>
      <article className="left">
        <p>
          Hello, I am Adi Ginting a computer enthusiast from Indonesia. I have a
          vast interest in technology, but I am inclined more towards web
          backend and system software development.
        </p>

        <p>
          My social media presence on &nbsp;
          <a
            href="https://github.com/adipginting"
            className="text-blue-900 hover:text-blue-400"
          >
            Github
          </a>
          ,&nbsp;
          <a
            href="https://linkedin.com/in/adipginting"
            className="text-blue-900 hover:text-blue-400"
          >
            Linkedin
          </a>
          , and &nbsp;
          <a
            href="https://twitter.com/adipginting"
            className="text-blue-900 hover:text-blue-500"
          >
            Twitter.
          </a>
        </p>
      </article>
      <article className="right"></article>
    </main>
  );
}
