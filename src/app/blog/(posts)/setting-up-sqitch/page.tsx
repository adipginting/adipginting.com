import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col xl:items-center">
      <div className=" flex flex-col gap-4 max-w-2xl pl-6 pr-6 pb-6 pt-4 ">
        <h1 className="font-extrabold tracking-wide uppercase">
          Setting up Sqitch (Blog Post on Progress)
        </h1>
        <p>
          Sqitch is a command line tool that you can use for database migration.
          My purpose learning sqitch was so that I can know how to set up
          database migrations in pure SQL.
        </p>
        <p>
          This is mainly a note and not a complete replacement for sqitch
          tutorial here that you can read{" "}
          <Link
            className="text-blue-600 hover:text-blue-500 hover:underline"
            href="https://sqitch.org/docs/manual/sqitchtutorial/"
          >
            here
          </Link>
          .
        </p>
        <p>
          The first thing that you need to know about sqitch that it will have
          three directories. The directories are deploy, revert, and verify. The
          deploy directory will contain the SQL codes that you use to create the
          structure of the database. The verify directory contains SQL codes to
          verify the success of the deployment. The revert directory will, you
          guess it, contain SQL codes to revert the changes that you have made.
        </p>
        <p>
          It has has two configuration files in the folder. One is a sqitch.conf
          and the other is sqitch.plan. The sqitch.conf contains the information
          about the database you use like the database address and the
          sqitch.plan contains the changes that you have made to your
          migrations.
        </p>
        <Image
          src="/sqitch-files.png"
          width={468}
          height={244}
          alt="Sqitch files."
        />
      </div>
    </main>
  );
}
