import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="  text-purple-600 h-[100vh] flex justify-center items-center flex-col gap-y-3 ">
      <p className=" text-xl sm:text-3xl  ">
        Hello from next js 13 App Router{" "}
      </p>
      <Link href="/dashboard" scroll={true}>
        <button className="w-[100px] h-[30px] text-black bg-slate-200 rounded-md  active:bg-slate-100 ">
          Dashboard
        </button>
      </Link>
    </main>
  );
}
