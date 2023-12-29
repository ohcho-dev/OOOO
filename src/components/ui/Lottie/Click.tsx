"use client";
import Lottie from "react-lottie-player";
import LottieLetterJson from "@/data/lottie_click.json";

export default function Click() {
  return (
    <Lottie
      speed={1}
      animationData={LottieLetterJson}
      play
      style={{ width: "15rem", height: "15rem", margin: " 0 auto" }}
    />
  );
}
