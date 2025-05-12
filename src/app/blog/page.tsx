import Github from "../../_components/github-mark.svg";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "./_components/blog-posts";

export default function Page() {
  return (
    <main className="gap-4 p-4 flex flex-col lg:items-center">
      <div>
        <h1 className="text-lg">
          Here are some blog posts that I have written on this website.
        </h1>

        <div className="ml-6 mt-2 max-w-2xl">
          <ul className="list-inside list-disc">
            {blogPosts.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={item.url}
                    className="hover:text-blue-500 text-blue-600 hover:underline"
                    target="_blank"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}
