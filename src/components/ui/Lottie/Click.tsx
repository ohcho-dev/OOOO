"use client";
import Lottie from "react-lottie-player";
import LottieLetterJson from "@/data/lottie_click.json";

export default function Click() {
  return (
    <Lottie
      speed={1}
      animationData={LottieLetterJson}
      play
      style={{ width: "20rem", height: "20rem", margin: " 0 auto" }}
    />
  );
}
