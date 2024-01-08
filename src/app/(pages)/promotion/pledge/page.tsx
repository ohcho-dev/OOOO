"use client";

import MainPledgeCard from "@/components/MainPledgeCard";
import { AnswerUser1State } from "@/store/atom";
import DecompressedString from "@/util/decompressedString";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

export default function PledgeMainPage() {
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
          <b>아이의 목소리</b>로 쓰여진 우리 <b>가족 서약서</b>
        </h4>

        <Image
          className="w-[19.2rem] h-[5rem] mt-[2rem]"
          src="/text_mother_father.png"
          alt="엄마&아빠"
          width={192}
          height={50}
        />
        <Image
          className="w-[20.3rem] h-[12.7rem] mt-[1.5rem]"
          src="/text_heart.png"
          alt="마음을알려줘"
          width={203}
          height={127}
        />
        {searchParams && (
          <h2 className="text-[3.6rem] font-bold mt-[5rem] text-center">
            사랑하는 나의 배우자가
            <br />
            육아 서약서 캠페인 참여를
            <br />
            요청하셨습니다.
          </h2>
        )}
        {!searchParams && <MainPledgeCard />}
        <div className="text-[1.6rem] mt-[4rem]">
          지금까지 <b>4,808,929333개</b>의 가족 서약서가 생성됐어요!
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
