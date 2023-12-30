"use client";

import { OpenToastState } from "@/store/atom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function Toast({ text = "" }) {
  const [openToast, setOpenToast] = useRecoilState(OpenToastState);

  useEffect(() => {
    const timer = setInterval(() => {
      setOpenToast(false);
    }, 2000);

    return () => clearInterval(timer);
  }, [text]);
  return (
    <div className="fixed left-[50%] z-50 translate-x-[-50%] bottom-[3rem] px-[1rem] py-[0.4rem] border rounded-[0.4rem] text-[1.4rem] leading-[2rem] text-white bg-[#222] animate-[fadeInOut_2s_ease-in-out]">
      {text}
    </div>
  );
}
