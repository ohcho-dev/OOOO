"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Toolbar() {
  const router = useRouter();
  return (
    <header className="w-full flex justify-between p-4 absolute top-0 left-0 z-10">
      <div>
        <div onClick={() => router.back()}>뒤로가기 아이콘</div>
      </div>
      <h1>타이틀영역</h1>
      <Link href="/promotion/pledge">
        <div>닫기 아이콘</div>
      </Link>
    </header>
  );
}
