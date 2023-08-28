/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import SignupForm from "@/components/signup-form";

export default function Home() {
  return (
    <header className="flex flex-col items-center min-h-screen py-24 px-7 sm:justify-center sm:px-10 sm:py-32">
      <h1 className="text-5xl font-semibold tracking-tight text-center sm:text-6xl">
        Crema
      </h1>

      <h2 className="max-w-[250px] mt-5 sm:mt-6 text-xl leading-relaxed text-center sm:max-w-none sm:text-2xl text-stone-500">
        Register, log and analyze your espresso shots.
      </h2>

      <SignupForm />

      <div className="flex flex-col sm:flex-row items-center sm:items-stretch mt-10 sm:mt-16 gap-10 max-w-[900px]">
        <div className="flex-1">
          <img alt="Crema app home" src="/mockup-home.png" />
        </div>

        <div className="flex-1">
          <img alt="Crema app register" src="/mockup-register.png" />
        </div>
      </div>

      <a
        href="https://github.com/lagomsoftware/crema-mobile"
        className="mt-16 opacity-25 hover:opacity-100 transition"
        target="_blank"
      >
        <Image
          src="/github-mark-white.png"
          className="w-10 h-10"
          alt="Github icon"
          height={100}
          width={100}
        />
      </a>
    </header>
  );
}
