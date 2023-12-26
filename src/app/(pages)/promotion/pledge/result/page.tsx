"use client";
import BottomButton from "@/components/BottomButton";
import Toolbar from "@/components/toolbar";
import Image from "next/image";

import { useRecoilValue } from "recoil";
import { AnswerUser1State } from "@/store/atom";
import { useEffect, useState } from "react";
import CompressedString from "@/util/compressedString";
import Link from "next/link";

export default function Page() {
  const answerUser1 = useRecoilValue(AnswerUser1State);
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (answerUser1) {
      const compress = CompressedString(answerUser1);
      const url = window?.location.host + "/promotion/pledge?" + compress;
      setUrl(url);
    }
  }, [answerUser1]);

  return (
    <div>
      <Toolbar />
      <div className="w-full h-[100svh] mb-[10rem] overflow-auto scroll-m-0">
        <Image
          className="pt-[8rem] mx-auto absolute"
          src="/paper.png"
          alt="서약서 배경"
          width={480}
          height={699}
        />
        <Image
          className="pt-[8rem] px-[4rem] mx-auto absolute top-[4rem]"
          src="/test.svg"
          alt="서약서 내용"
          width={600}
          height={600}
        />
        <Link
          className="text-[2rem] relative left-[0] top-[80svh]"
          href={`http://${url}`}
        >
          {url}
        </Link>
      </div>
      <BottomButton
        label="배우자에게 공유하기"
        status={true}
        onClick={() => {}}
      />
    </div>
  );
}
