import Link from "next/link";

export default function Page() {
  return (
    <>
      <ol className="list-decimal ml-5 mt-2">
        <li>
          <Link
            className="text-blue-900 hover:text-blue-400"
            href="/blog/code-wars-0"
          >
            Pembahasan Code Wars: Build A Pile of Cubes
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-900 hover:text-blue-400"
            href="/blog/merge-sort"
          >
            Merge Sort: Intuisi dan Kode
          </Link>
        </li>
      </ol>
    </>
  );
}
