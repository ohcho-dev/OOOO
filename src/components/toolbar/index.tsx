"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Toolbar() {
  const router = useRouter();
  return (
    <header className="w-full flex justify-between p-4 absolute top-0 left-0 z-10">
      <div onClick={() => router.back()} className="px-[1.8rem] py-[1.6rem]">
        <Image src="/back.png" alt="뒤로가기" width={27} height={15} />
      </div>
      <h1>
        <Image src="/logo.png" alt="육아응원" width={81} height={28} />
      </h1>
      <Link href="/">
        <div className="text-[2.4rem] px-[1.8rem] pb-[1rem]">x</div>
      </Link>
    </header>
  );
}
