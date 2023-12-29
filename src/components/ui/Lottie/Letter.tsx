"use client";
import Lottie from "react-lottie-player";
import LottieLetterJson from "@/data/lottie_letter2.json";

export default function Letter() {
  return (
    <Lottie
      loop
      animationData={LottieLetterJson}
      className="drop_shadow"
      play
      style={{ width: "24rem", height: "24rem", margin: " 0 auto" }}
    />
  );
}
