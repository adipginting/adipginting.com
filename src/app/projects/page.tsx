import Github from "../../_components/github-mark.svg";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="gap-6 p-4 flex flex-col lg:items-center">
      <div className="w-full max-w-2xl">
        <div className="flex rounded-md gap-x-2 w-max">
          <div>Industrialisasi (work on progress)</div>
          <Link
            href="https://www.github.com/adipginting/industrialisasi"
            target="_blank"
            className="flex items-center text-pink-800 hover:text-purple-950"
          >
            <Github />
          </Link>
          <Link
            href="https://www.industrialisasi.com"
            target="_blank"
            className="flex items-center text-pink-800 hover:text-purple-950"
          >
            <LinkIcon className="w-5 h-5" />
          </Link>
        </div>

        <p>
          Industrialisasi is a blog engine and planned to be a content
          management system. It is built in JavaScript on top of ExpressJS to
          serve RESTful API requests from its user interface that is built on
          top of ReactJS and Bootstrap. The data is persisted on PostgreSQL
          database. An instance of Industrialisasi is currently running on a VPS
          using docker and docker compose.
        </p>
      </div>
      <div className="w-full max-w-2xl">
        <div className="flex rounded-md gap-x-2 w-max">
          <div>Stoic Quote API (work on progress)</div>
          <Link
            href="https://github.com/adipginting/stoic-quote-api"
            target="_blank"
            className="flex items-center text-pink-800 hover:text-purple-950"
          >
            <Github />
          </Link>
          <Link
            href="https://stoic-quote-api.industrialisasi.com"
            target="_blank"
            className="flex items-center text-pink-800 hover:text-purple-950"
          >
            <LinkIcon className="w-5 h-5" />
          </Link>
        </div>

        <p>
          Stoic Quote API is a simple API for getting random quote from four
          classic books of Stoicism. This API is built in JavaScript with NestJS
          framework.
        </p>
      </div>
    </main>
  );
}
