import Github from "../../_components/github-mark.svg";
import { CirclePlay } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col xl:items-center">
      <div className=" flex flex-col gap-4 max-w-2xl pl-6 pr-6 pb-6 pt-4 ">
        <div>About me</div>
        <p>
          I am from Berastagi, North Sumatra. My curiosity towards computer
          started early. It was essentially kindled by my childhood friend and
          my uncle. I did not know anything about computer programming in those
          early years and I did not have any expectation of having a career in
          software development.
        </p>
        <p>
          After high school, I pursued physics education degree. It was here
          that I first learned about a real programming language: PASCAL. I was
          also active in a Linux user group in my city.
        </p>
        <p>
          After finishing the degree, I went back to school to pursue a computer
          science degree. I did not get the compsci degree, but I consider this
          as a precious period in my life. I eventually decided to learn web
          development autodidactly in JavaScript ecosystem.
        </p>
        <p>
          Professionally, I mostly work in web full stack capacity and I
          consider myself as a web developer.
        </p>
        <p>
          Besides programming, I also have a knack for writing and translating,
          I was active in Quora for several years and wrote various topics.
        </p>

        <p>
          I am ready for the next stage of our technological era. I hope we can
          transition peacefully to the AI age.
        </p>
      </div>

      {/* <div className="w-full max-w-2xl">
        <div className="flex rounded-md gap-x-2 w-[180px]">
          <div>Stoic Quote API</div>
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
            <CirclePlay className="w-5 h-5" />
          </Link>
        </div>

        <p>
          Stoic Quote API is a simple API for getting random quote from four
          classic books of Stoicism. This API is built in JavaScript with NestJS
          framework.
        </p>
      </div> */}
    </main>
  );
}
