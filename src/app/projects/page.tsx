export default function Page() {
  return (
    <div className="pt-2">
      <p> On going personal projects.</p>
      <div>
        <h2 className="pt-2">
          A){" "}
          <a
            href="https://industrialisasi.com"
            className="text-blue-950 hover:text-blue-500"
          >
            Industrialisasi (2022-present)
          </a>
        </h2>
        <p>
          Industrialisasi is a blog engine and planned to be a content
          management system. It is built in JavaScript on top of ExpressJS to
          serve RESTful API requests from its user interface that is built on
          top of ReactJS and Bootstrap. The data is persisted on PostgreSQL
          database. An instance of Industrialisasi is currently running on a VPS
          using docker and docker compose. Some notable features that I am proud
          of on this project is the authorization and authentication flow both
          in back-end and front-end.
        </p>
        <p>Links:</p>
        <ol className="list-decimal list-inside">
          <li>
            <a
              href="https://industrialisasi.com"
              className="text-blue-950 hover:text-blue-500"
            >
              Industrialisasi Blog Instance
            </a>
          </li>
          <li>
            <a
              href="https://api-doc.industrialisasi.com"
              className="text-blue-950 hover:text-blue-500"
            >
              Industrialisasi API Documentation
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adipginting/industrialisasi-api"
              className="text-blue-950 hover:text-blue-500"
            >
              Industrialisasi API Github Repository
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adipginting/industrialisasi-ui"
              className="text-blue-950 hover:text-blue-500"
            >
              Industrialisasi UI Github Repository
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adipginting/industrialisasi"
              className="text-blue-950 hover:text-blue-500"
            >
              Industrialisasi Docker Compose Repository
            </a>
          </li>
        </ol>
      </div>
      <div>
        <h2 className="pt-2">
          B){" "}
          <a
            href="https://github.com/adipginting/stoic-quote-api"
            className="text-blue-950 hover:text-blue-500"
          >
            Stoic Quote API (2023-present)
          </a>
        </h2>

        <p>
          {/* <a
            href="https://github.com/adipginting/stoic-quote-api"
            className="text-blue-950 hover:text-blue-500"
          > */}
          Stoic Quote API is a simple API for getting random quote from four
          classic books of Stoicism. This API is built in JavaScript with NestJS
          framework.
          {/* </a> */}
        </p>
        {/* <p>Links:</p>
        <ol className="list-decimal list-inside">
          <li>
            <a
              href="https://stoic-quote-api.onrender.com/api-doc"
              className="text-blue-950 hover:text-blue-500"
            >
              Stoic Quote API Documentation
            </a>
          </li>
          <li>
            <a
              href="https://stoic-quote-api.onrender.com/"
              className="text-blue-950 hover:text-blue-500"
            >
              Stoic Quote API Main End Point
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adipginting/stoic-quote-api"
              className="text-blue-950 hover:text-blue-500"
            >
              Stoic Quote API Github Repository
            </a>
          </li>
        </ol> */}
      </div>
    </div>
  );
}
