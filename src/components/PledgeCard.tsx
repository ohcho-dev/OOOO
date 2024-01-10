"use client";
import Image from "next/image";
import Letter from "./ui/Lottie/Letter";
import Click from "./ui/Lottie/Click";
import PledgeCardBack from "./PledgeCardBack";
import { useState } from "react";
import { useParams } from "next/navigation";

interface PledgeCardProps {
  name: string;
}
export default function PledgeCard({ name }: PledgeCardProps) {
  const params = useParams();
  const [card, setCard] = useState(false);

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
          <div className="pb-[2rem] relative w-[39rem] h-[62.4rem] mx-auto bg-[url(/letter_bg.png)] bg-cover shadow-md rounded-[2rem] z-30">
            <Image
              src="/logo_white.png"
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
            {!params.id ? (
              <div className="text-white text-center text-[2.6rem] leading-[3.4rem] mt-[-3rem]">
                {name}네 서약서
              </div>
            ) : (
              <div className="text-white text-center text-[2.6rem] leading-[3.4rem] mt-[-3rem]">
                {name}네 서약서가
                <br />
                도착했습니다
              </div>
            )}
            {!params.id ? (
              <>
                <div className="mt-[13rem] text-[2.1rem] text-center leading-[3.6rem] font-bold">
                  두근두근!
                  <br />
                  배우자에게 공유하면
                  <br />
                  어떤 서약서가 만들어질까요?
                </div>

                <div className="mt-[5rem] text-[1.6rem] text-center">
                  2024.01.05
                </div>
              </>
            ) : (
              <>
                <div className="mt-[21.4rem] text-[2rem] text-center">
                  엄마♥️아빠 함께 약속해요!
                </div>
                <div className="mt-[1.5rem] text-[1.6rem] text-center">
                  2024.01.05
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
