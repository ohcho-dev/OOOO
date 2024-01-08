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
}
export default function PledgeCardBack({ name, card }: PledgeCardBackProps) {
  const pathname = useParams();
  const router = useRouter();

  const today = new Date();
  const formattedDate = `${today.getFullYear()}. ${
    today.getMonth() + 1
  }. ${today.getDate()}`;
  return (
    <>
      <div
        className={`relative w-[39rem] h-[62.4rem] mx-auto bg-[url(/flower_img.png)] bg-cover shadow-md rounded-[2rem]`}
      >
        {/* <a href="https://kr.freepik.com/free-vector/hand-painted-watercolor-floral-background_17437651.htm#query=%EA%BD%83&position=23&from_view=search&track=sph&uuid=d1a3578f-7621-42d0-83a1-6369c306975a">작가 coolvector</a> 출처 Freepik
         */}
        <div className="absolute top-[0] left-[0] w-full text-center">
          <div className="mt-[6.9rem] text-[1.8rem]">{name}네 서약서</div>
          {pathname.id ? (
            <>
              <div className="mt-[3.3rem] text-[3rem]">
                <div>엄마 ♥️ 아빠</div>
                <div>함께 약속해요!</div>
              </div>
              <div className="mt-[3.5rem] text-[2rem]">
                우리 가족은
                <br />
                화목한 가정을 만들기 위해
                <br />
                아래와 같이 서약합니다.
              </div>
              <div className="text-[1.6rem] mt-[2.4rem]">
                {getDate(formattedDate)}
              </div>
              <button
                className="z-100 absolute top-[46rem] left-[50%] translate-x-[-50%] w-[30.2rem] h-[6rem] bg-[#F9E9B3] text-[1.8rem]"
                onClick={() =>
                  router.push(
                    `/promotion/pledge/result2/${pathname.id}/document`
                  )
                }
              >
                서약서 보기
              </button>
            </>
          ) : (
            <>
              <div className="mt-[3.3rem] text-[3rem]">
                <div>엄마 ♥️ 아빠</div>
                <div>함께 약속해요!</div>
              </div>
              <div className="mt-[3.5rem] text-[2rem]">
                우리 가족은
                <br />
                화목한 가정을 만들기 위해
                <br />
                아래와 같이 서약합니다.
              </div>
              <div className="font-bold mt-[6.4rem] text-[2.2rem]">
                <span className="text-[#F25D24]">배우자에게 공유</span>하고
                <br />
                배우자의 서약서 작성이 완료되면
                <br />
                최종 서약서을 받을 수 있습니다.
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
