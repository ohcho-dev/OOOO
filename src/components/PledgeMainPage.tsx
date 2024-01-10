"use client";

import MainPledgeCard from "@/components/MainPledgeCard";
import { AnswerUser1State } from "@/store/atom";
import DecompressedString from "@/util/decompressedString";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

export default function PledgeMainPage({ count = 0 }) {
  const router = useRouter();
  const setAnswerUser1 = useSetRecoilState(AnswerUser1State);
  const [searchParams, setSearchParams] = useState("");
  const today = new Date();
  const formattedDate = `${today.getFullYear()}. ${
    today.getMonth() + 1
  }. ${today.getDate()}`;

  useEffect(() => {
    setSearchParams(window.location.search.substring(1));
  }, []);

  useEffect(() => {
    if (searchParams) {
      const data = DecompressedString(searchParams);
      setAnswerUser1(data);
    }
  }, [searchParams]);

  return (
    <section className="w-full max-w-[52rem] h-[100svh] flex justify-between flex-col">
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          className="w-[16.2rem] h-[5.6rem]"
          src="/logo.png"
          alt="육아응원"
          width={162}
          height={56}
        />
        <Image
          className="w-[2.4rem] h-[2.4rem] mt-[2rem]"
          src="/icon_x.png"
          alt="colaboration"
          width={24}
          height={24}
        />
        <h4 className="text-[2rem] mt-[2rem]">
          <b>아이의 목소리</b>를 담은 우리 <b>가족 서약서</b>
        </h4>

        <Image
          className="w-[29.8rem] h-[26.7rem] mt-[1.5rem]"
          src="/text_heart.png"
          alt="마음을알려줘"
          width={298}
          height={267}
        />
        {searchParams && (
          <h2 className="text-[2.4rem] mt-[8rem] text-center">
            <b>배우자가 당신의 참여</b>를 기다리고 있습니다.
            <br />
            <b>우리 가족 서약서</b>를 함께 만들어보세요!
          </h2>
        )}
        {!searchParams && <MainPledgeCard />}
        <div className="text-[1.6rem] mt-[4rem]">
          지금까지 <b>{count}개</b>의 가족 서약서가 생성됐어요!
        </div>
      </div>
      <button
        onClick={() =>
          router.push(
            searchParams
              ? `/promotion/pledge/info?${searchParams}`
              : "/promotion/pledge/info"
          )
        }
        className="w-full min-h-[8rem] bg-[#F9E9B3] text-[2.1rem]"
      >
        참여하기
      </button>
    </section>
  );
}
