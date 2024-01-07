"use client";
import Image from "next/image";
import Letter from "./ui/Lottie/Letter";
import Click from "./ui/Lottie/Click";
import PledgeCardBack from "./PledgeCardBack";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { CapturedCardState } from "@/store/atom";
import html2canvas from "html2canvas";

interface PledgeCardProps {
  name: string;
}
export default function PledgeCard({ name }: PledgeCardProps) {
  const [card, setCard] = useState(false);
  const [capturedCard, setCapturedCard] = useRecoilState(CapturedCardState);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef) {
      console.log(elementRef);
      captureElement();
    }
  }, [elementRef]);

  const captureElement = async () => {
    const element = elementRef.current;

    if (element) {
      const canvas = await html2canvas(element);
      const imageDataUrl = canvas.toDataURL("image/png");
      setCapturedCard(imageDataUrl);
    }
  };

  return (
    <div
      className="card-wrap relative"
      onClick={(e) => {
        e.preventDefault();
        setCard((prev) => !prev);
      }}
    >
      <div className="absolute z-10 top-[30rem] left-[50%] translate-x-[-50%] animate-[click_5s_ease-in-out_infinite]">
        {!card && <Click />}
      </div>
      <div className={`card ${card ? "rotate" : ""}`}>
        <div className="card-front">
          <div
            ref={elementRef}
            className="pb-[2rem] relative w-[39rem] h-[62.4rem] mx-auto bg-[url(/letter_bg.png)] bg-cover shadow-md rounded-[2rem]"
          >
            <Image
              loading="lazy"
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
            <div className="text-white text-center text-[2.6rem] leading-[3.4rem] mt-[-3rem]">
              {name}네 서약서가
              <br />
              도착했습니다
            </div>
            <div className="mt-[21.4rem] text-[2rem] text-center">
              엄마♥️아빠 함께 약속해요!
            </div>
            <div className="mt-[1.5rem] text-[1.6rem] text-center">
              2024.01.05
            </div>
          </div>
        </div>
        <div className="card-back">
          <PledgeCardBack name={name} card={card} />
        </div>
      </div>
    </div>
  );
}
