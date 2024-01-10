"use client";
import Image from "next/image";
import Letter from "./ui/Lottie/Letter";
import Click from "./ui/Lottie/Click";
import PledgeCardBack from "./PledgeCardBack";
import { useState } from "react";
import { useParams } from "next/navigation";
import { getDate } from "@/util/getDateTime";

interface PledgeCardProps {
  name: string;
}
export default function PledgeCard({ name }: PledgeCardProps) {
  const params = useParams();
  const [card, setCard] = useState(false);

  const today = new Date();
  const formattedDate = `${today.getFullYear()}. ${
    today.getMonth() + 1
  }. ${today.getDate()}`;

  return (
    <div
      className="card-wrap relative"
      onClick={(e) => {
        e.preventDefault();
        setCard((prev) => !prev);
      }}
    >
      <div className="absolute z-10 top-[30rem] left-[50%] translate-x-[-50%] animate-[click_4s_ease-in-out_infinite]">
        {!card && <Click />}
      </div>
      <div className={`card ${card ? "rotate" : ""}`}>
        <div className="card-front">
          <div className="pb-[2rem] relative w-[39rem] h-[62.4rem] mx-auto bg-[url(/letter_bg.webp)] bg-cover shadow-md rounded-[2rem] z-30">
            <Image
              src="/logo_white.webp"
              alt="육아응원"
              className="pt-[2rem] w-[6rem] mx-auto mt-[2.4rem]"
              width={162}
              height={56}
            />
            <div className="mt-[-3rem]">
              <Letter
                style={{ width: "24rem", height: "24rem", margin: " 0 auto" }}
              />
            </div>
            <div className="text-white text-center text-[2.6rem] leading-[3.4rem] mt-[-3rem]">
              {name}네 서약서
              <br />
              <span className="text-[3rem] leading-[5rem]">
                카드를 클릭하여 미리보기!
              </span>
            </div>
            {!params.id ? (
              <>
                <div className="mt-[9rem] text-[2.1rem] text-center leading-[3.6rem] font-bold">
                  배우자에게 공유하여
                  <br />
                  가족 서약서 참여를 요청해주세요!
                </div>

                <div className="mt-[5rem] text-[2.1rem] text-center font-bold">
                  과연 어떤 서약서가 탄생할까요?
                </div>
              </>
            ) : (
              <>
                <div className="mt-[20.4rem] text-[2rem] text-center font-bold">
                  엄마♥️아빠 함께 약속해요!
                </div>
                <div className="mt-[1.5rem] text-[1.6rem] text-center">
                  {getDate(formattedDate)}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="card-back">
          <PledgeCardBack name={name} card={card} />
        </div>
      </div>
    </div>
  );
}
