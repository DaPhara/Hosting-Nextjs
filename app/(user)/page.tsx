"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1 className="h-screen grid place content-center text-2xl text-red-600 font-bold text-center ">
        Hello Gay Gay
      </h1>
      <div className="h-screen grid place-content-center ">
        <button
          className=" text-white bg-purple-700 font-bold text-2xl border rounded-full p-8"
          onClick={() => router.push("/about", { scroll: false })}
        >
          This is TNT
        </button>
      </div>
    </>
  );
}
