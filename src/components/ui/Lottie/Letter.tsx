"use client";
import Lottie from "react-lottie-player";
import LottieLetterJson from "@/data/lottie_letter2.json";

interface LetterProps {
  style: {};
}
export default function Letter({ style }: LetterProps) {
  return (
    <Lottie
      loop
      animationData={LottieLetterJson}
      className="drop_shadow"
      play
      style={style}
    />
  );
}
