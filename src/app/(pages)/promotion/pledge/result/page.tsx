"use client";
import BottomButton from "@/components/BottomButton";
import Toolbar from "@/components/toolbar";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Toolbar />
      <div className="mb-[10rem] max-h-calcResultPage overflow-auto scroll-m-0">
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
      </div>
      <BottomButton
        label="배우자에게 공유하기"
        status={true}
        onClick={() => {}}
      />
    </div>
  );
}
