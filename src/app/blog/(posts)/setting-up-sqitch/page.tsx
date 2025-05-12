import Link from "next/link";

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
      </div>
    </main>
  );
}
