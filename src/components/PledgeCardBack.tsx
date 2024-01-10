"use client";
import {
  AnswerMood1State,
  AnswerMood2State,
  AnswerUser1MoodState,
  AnswerUser2MoodState,
  CapturedCardState,
} from "@/store/atom";
import useInterval from "@/util/useInterval";
import html2canvas from "html2canvas";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
interface PledgeCardBackProps {
  name: string;
  card: boolean;
}
export default function PledgeCardBack({ name, card }: PledgeCardBackProps) {
  const pathname = useParams();
  const router = useRouter();

  const [capturedCard, setCapturedCard] = useRecoilState(CapturedCardState);
  const answerMood1 = useRecoilValue(AnswerMood1State);
  const answerMood2 = useRecoilValue(AnswerMood2State);
  const answerUser1Mood = useRecoilValue(AnswerUser1MoodState);
  const answerUser2Mood = useRecoilValue(AnswerUser2MoodState);
  const elementRef = useRef<HTMLDivElement>(null);

  useInterval(() => {
    if (elementRef && card && !capturedCard) {
      captureElement();
    }
  }, 1000);

  const captureElement = async () => {
    const element = elementRef.current;

    if (element) {
      const canvas = await html2canvas(element, {
        scale: 32,
        width: 390,
        height: 624,
      });
      const imageDataUrl = canvas.toDataURL("image/png");
      setCapturedCard(imageDataUrl);
    }
  };

  return (
    <div>
      <div
        ref={elementRef}
        className={`absolute z-5 w-[39rem] h-[62.4rem] mx-auto bg-[url(/paper.png)] bg-cover shadow-md rounded-[2rem]`}
      >
        {/* <a href="https://kr.freepik.com/free-vector/hand-painted-watercolor-floral-background_17437651.htm#query=%EA%BD%83&position=23&from_view=search&track=sph&uuid=d1a3578f-7621-42d0-83a1-6369c306975a">작가 coolvector</a> 출처 Freepik
         */}
        <div className="absolute top-[0] left-[0] w-full text-center">
          {pathname.id && (
            <>
              <div className="text-[2.4rem] font-bold mt-[10rem]">
                <span className="text-[#F65B5b]">{name}네</span> 서약서
              </div>
              <img
                src="/paper_bg_text.png"
                alt="엄마 아빠 함께 약속해요!"
                width={268}
                height={64.5}
                className="w-[26.8rem] mx-auto mt-[0.6rem]"
              />
              <div className="text-[1.8rem] font-bold leading-[3rem] text-center mt-[2rem]">
                우리 가족은{" "}
                <span className="text-[#F65B5B] text-[3rem]">
                  {answerMood1}
                </span>
                과{" "}
                <span className="text-[#F65B5B] text-[3rem]">
                  {answerMood2}
                </span>
                이 넘치는
                <br />
                화목한 가정을 만들기 위해
                <br />
                아래와 같이 서약합니다.
              </div>
              <div className="text-[2.2rem] leading-[3.6rem] text-center mt-[15.5rem]">
                <span className="inline-block pl-[1rem] ml-[-1rem] bg-[url(/bg_blur1.png)] bg-cover bg-repeat font-bold">
                  {answerUser1Mood}{" "}
                </span>{" "}
                엄마 아무개
                <br />
                <span className="inline-block pl-[1rem] ml-[-1rem] bg-[url(/bg_blur1.png)] bg-cover bg-repeat font-bold">
                  {answerUser2Mood}{" "}
                </span>{" "}
                아빠 홍길동
                <br />
                <span className="inline-block pl-[1rem] ml-[-1rem] bg-[url(/bg_blur1.png)] bg-cover bg-repeat font-bold">
                  세상에 하나뿐인{" "}
                </span>{" "}
                아들 희망이
              </div>
            </>
          )}
          {/* <a href="https://kr.freepik.com/free-vector/father-mother-backpacking-to-take-her-daughter-out-for-a-trip_13575796.htm#page=3&query=%EA%B0%80%EC%A1%B1&position=36&from_view=search&track=sph&uuid=c75d9118-9140-4932-a5b6-dcd7e648cfbd">작가 jcomp</a> 출처 Freepik */}
        </div>
      </div>

      <div
        className={`relative z-10 w-[39rem] h-[62.4rem] mx-auto bg-[url(/paper.png)] bg-cover shadow-md rounded-[2rem]`}
      >
        {/* <a href="https://kr.freepik.com/free-vector/hand-painted-watercolor-floral-background_17437651.htm#query=%EA%BD%83&position=23&from_view=search&track=sph&uuid=d1a3578f-7621-42d0-83a1-6369c306975a">작가 coolvector</a> 출처 Freepik
         */}
        <div className="absolute top-[0] left-[0] w-full text-center">
          {pathname.id ? (
            <>
              <div className="text-[2.4rem] font-bold mt-[10rem]">
                <span className="text-[#F65B5b]">{name}네</span> 서약서
              </div>
              <img
                src="/paper_bg_text.png"
                alt="엄마 아빠 함께 약속해요!"
                width={268}
                height={64.5}
                className="w-[26.8rem] mx-auto mt-[0.6rem]"
              />
              <div className="text-[1.8rem] font-bold leading-[3rem] text-center mt-[2rem]">
                우리 가족은{" "}
                <span className="text-[#F65B5B] text-[3rem]">
                  {answerMood1}
                </span>
                과{" "}
                <span className="text-[#F65B5B] text-[3rem]">
                  {answerMood2}
                </span>
                이 넘치는
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
              <div className="text-[2.4rem] font-bold mt-[10rem]">
                <span className="text-[#F65B5b]">{name}네</span> 서약서
              </div>
              <img
                src="/paper_bg_text.png"
                alt="엄마 아빠 함께 약속해요!"
                width={268}
                height={64.5}
                className="w-[26.8rem] mx-auto mt-[0.6rem]"
              />
              <div className="text-[2rem] font-bold leading-[3.5rem] mt-[2rem]">
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
    </div>
  );
}
