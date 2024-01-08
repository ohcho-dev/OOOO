"use client";
import {
  AnswerUser1State,
  AnswerUser2State,
  OpenModalState,
} from "@/store/atom";
import SplitText from "@/util/SplitText";
import { getDate } from "@/util/getDateTime";
import useTypingWords from "@/util/useTypingWords";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
interface PledgeCardBackProps {
  name: string;
  card: boolean;
  ref?: React.ForwardedRef<HTMLDivElement> | null;
}
export default function PledgeCardBack({
  name,
  card,
  ref,
}: PledgeCardBackProps) {
  const pathname = useParams();
  const router = useRouter();

  const today = new Date();
  const formattedDate = `${today.getFullYear()}. ${
    today.getMonth() + 1
  }. ${today.getDate()}`;
  return (
    <>
      <div
        ref={ref}
        className={`relative w-[39rem] h-[62.4rem] mx-auto bg-[url(/paper.png)] bg-cover shadow-md rounded-[2rem]`}
      >
        {/* <a href="https://kr.freepik.com/free-vector/hand-painted-watercolor-floral-background_17437651.htm#query=%EA%BD%83&position=23&from_view=search&track=sph&uuid=d1a3578f-7621-42d0-83a1-6369c306975a">작가 coolvector</a> 출처 Freepik
         */}
        <div className="absolute top-[0] left-[0] w-full text-center">
          {pathname.id ? (
            <>
              <div className="text-[1.8rem] font-bold leading-[3rem] text-center mt-[23rem]">
                우리 가족은 사랑과 웃음이 넘치는
                <br />
                화목한 가정을 만들기 위해
                <br />
                아래와 같이 서약합니다.
              </div>

              <button
                className="w-[20rem] h-[6rem] bg-[#F25D24] text-[2.1rem] text-white font-bold rounded-[3rem] mt-[3.5rem]"
                onClick={() =>
                  router.push(
                    `/promotion/pledge/result2/${pathname.id}/document`
                  )
                }
              >
                서약서 보기
              </button>
              <div className="bg-[#F9E9B3] w-[14.5rem] h-[14.5rem] bg-[url(/card2.svg)] bg-no-repeat bg-cover mx-auto mt-[5rem] bg-blend-darken" />
            </>
          ) : (
            <>
              <div className="text-[2rem] font-bold leading-[3.5rem] mt-[23rem]">
                화목한 가정을 만들기 위해
                <br />
                아래와 같이 서약합니다.
              </div>
              <Image
                className="mt-[4rem] mx-auto w-[9rem] h-[6.5rem]"
                src="/card1.png"
                alt="서약서"
                width={90}
                height={65}
              />
              <div className="bg-[#F9E9B3] w-[14.5rem] h-[14.5rem] bg-[url(/card2.svg)] bg-no-repeat bg-cover mx-auto mt-[7rem] bg-blend-darken" />
            </>
          )}
          {/* <a href="https://kr.freepik.com/free-vector/father-mother-backpacking-to-take-her-daughter-out-for-a-trip_13575796.htm#page=3&query=%EA%B0%80%EC%A1%B1&position=36&from_view=search&track=sph&uuid=c75d9118-9140-4932-a5b6-dcd7e648cfbd">작가 jcomp</a> 출처 Freepik */}
        </div>
      </div>
    </>
  );
}
