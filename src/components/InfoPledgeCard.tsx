"use client";
import { getDate } from "@/util/getDateTime";
import Image from "next/image";
import { useEffect, useState } from "react";
import Letter from "./ui/Lottie/Letter";

export default function InfoPledgeCard() {
  const [card, setCard] = useState(false);

  const today = new Date();
  const formattedDate = `${today.getFullYear()}. ${
    today.getMonth() + 1
  }. ${today.getDate()}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCard((current) => !current);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card-wrap-main w-[24.4rem] h-[48rem] mt-[4rem]">
      <div className={`card ${card ? "rotate" : ""}`}>
        <div className="card-front w-[24.4rem] h-[39.2rem]">
          <div className="relative w-[24.4rem] h-[39.2rem]">
            <Image
              src="/card_main_bg.png"
              alt="서약서 카드"
              width="244"
              height="392"
            />
            <Letter
              style={{
                position: "absolute",
                top: "1.2rem",
                left: "50%",
                transform: "translateX(-50%)",
                width: "14rem",
              }}
            />
            <div className="relative mt-[-3.6rem] text-center text-[1.6rem]">
              {getDate(formattedDate)}
            </div>
          </div>
        </div>
        <div className="card-back w-[24.4rem]">
          <div className="relative w-[24.4rem] h-[39.2rem]">
            <Image
              src="/card_main_bg.png"
              alt="서약서 카드"
              width="244"
              height="392"
            />
            <Letter
              style={{
                position: "absolute",
                top: "1.2rem",
                left: "50%",
                transform: "translateX(-50%)",
                width: "14rem",
              }}
            />
            <div className="relative mt-[-3.6rem] text-center text-[1.6rem]">
              {getDate(formattedDate)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
