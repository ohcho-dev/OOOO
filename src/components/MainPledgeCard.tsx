"use client";
import { getDate } from "@/util/getDateTime";
import Image from "next/image";
import { useEffect, useState } from "react";
import Letter from "./ui/Lottie/Letter";

export default function MainPledgeCard() {
  const [card, setCard] = useState(false);

  const today = new Date();
  const formattedDate = `${today.getFullYear()}/${
    today.getMonth() + 1
  }/${today.getDate()}`;

  useEffect(() => {
    setCard(true);
    const timer = setInterval(() => {
      setCard((current) => !current);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card-wrap-main w-[12rem] h-[25.2rem]  mt-[2rem]">
      <div className={`card ${card ? "rotate" : ""}`}>
        <div className="card-front w-[12rem] h-[19.2rem]">
          <div className="relative w-[12rem] h-[19.2rem] rounded-[1.4rem] overflow-hidden shadow-md">
            <Image
              className="h-[19.2rem]"
              src="/card_main_bg.webp"
              alt="서약서 카드"
              width="120"
              height="192"
            />
            <Letter
              style={{
                position: "absolute",
                top: "0.6rem",
                left: "50%",
                transform: "translateX(-50%)",
                width: "7rem",
              }}
            />
            <div className="relative mt-[-1.8rem] text-center text-[0.5rem]">
              {getDate(formattedDate)}
            </div>
          </div>
        </div>
        <div className="card-back w-[12rem] h-[19.2rem]">
          <div className="relative w-[12rem] h-[19.2rem] rounded-[1.4rem] overflow-hidden shadow-md">
            <Image
              className="h-[19.2rem]"
              src="/card_main_bg_2.webp"
              alt="서약서 카드"
              width="120"
              height="192"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
