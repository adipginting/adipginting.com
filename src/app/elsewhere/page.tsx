import Github from "../../_components/github-mark.svg";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { englishQuora, indonesianQuora } from "./_components/elsewhere-posts";

export default function Page() {
  return (
    <main className="gap-6 p-4 flex flex-col lg:items-center">
      <h1 className="text-lg">
        I write on several platforms on various topics. These are some of my
        curated posts on other platforms.
      </h1>

      <div className="max-w-2xl">
        <ol className="flex flex-col gap-y-4">
          <li>
            <h2 className="text-md">On English Quora</h2>
            <ul className="list-inside list-disc ml-4">
              {englishQuora.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="hover:text-pink-800 text-purple-950"
                      target="_blank"
                    >
                      {item.description}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <h2 className="text-md">On Indonesian Quora</h2>
            <ul className="list-inside list-disc ml-4">
              {indonesianQuora.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="hover:text-pink-800 text-purple-950"
                      target="_blank"
                    >
                      {item.description}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ol>
      </div>
    </main>
  );
}
